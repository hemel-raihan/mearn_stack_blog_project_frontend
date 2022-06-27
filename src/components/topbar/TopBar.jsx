import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const currentUser = false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className="topListItem">
          <Link className='link' to='/'>ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className='link' to='/'>CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className="topListItem">
           {currentUser && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
      {currentUser ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
