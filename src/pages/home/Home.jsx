import './home.css'
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
console.log(search)
  useEffect(() =>{
    const fetchPosts = async () =>{
      const res = await axios.get('http://localhost:5000/api/posts'+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
    <Header />
    <div className='home'>
      <Row>
        <Col md={9} sm={12}>
          <Posts posts={posts} />
        </Col>
        <Col md={3} sm={12}>
            <Sidebar />
        </Col>
      </Row>
    </div>
    </>
   
  )
}
