import './home.css'
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
      <Row>
        <Col md={9} sm={12}>
          <Posts />
        </Col>
        <Col md={3} sm={12}>
            <Sidebar />
        </Col>
      </Row>
    </div>
    </>
   
  )
}
