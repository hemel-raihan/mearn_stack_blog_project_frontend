
import "./posts.css";
import Post from '../post/Post';

export default function Posts({ posts }) {
  if(!posts) return(
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    </>
  )
  return (
    <div className="posts">
      {posts.map((p) =>(
        <Post post={p}/>
      ))}
    </div>
  );
}