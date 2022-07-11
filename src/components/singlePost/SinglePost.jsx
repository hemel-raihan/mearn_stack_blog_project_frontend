import { Link, useLocation, useNavigate} from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from "../../context/Context";

export default function SinglePost() {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({})
  const PF = "https://node-blog-projects-api.herokuapp.com/uploads/";
  useEffect(() =>{
    const getPost = async () =>{
      const res = await axios.get('https://blog-projects-mern-api.herokuapp.com/api/posts/'+path)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  },[path])


  const handleDelete = async()=>{
    try{
      await axios.delete(`https://blog-projects-mern-api.herokuapp.com/api/posts/${post._id}`, {data: {username: user.username}})
      navigate("/");
    }
    catch(err){

    }
    
  }

  const handleUpdate = async()=>{
    try{
      await axios.put(`https://blog-projects-mern-api.herokuapp.com/api/posts/${post._id}`, {
       username: user.username, 
       title, 
       desc
      });
      setUpdateMode(false);
    }
    catch(err){

    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt=""
          />
        )}
        {
          updateMode ? <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} className='singlePostTitleInput' /> : (
         <h1 className="singlePostTitle">
         {title}
         {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() =>setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
         )}
        </h1>
          )
        }
      
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>

        {
          updateMode ? (
              <textarea onChange={(e)=>setDesc(e.target.value)} className="singlePostDescInput" value={desc}  /> 
          ) : (
            <p className="singlePostDesc">
              {desc}
            </p>
          )
        }

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate} >Update</button>
        )}
        
        
      </div>
    </div>
  );
}