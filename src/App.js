
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/register';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SinglePost from './components/singlePost/SinglePost';

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/login' element={currentUser ? <Home /> : <Login />} />
        <Route  path='/register' element={currentUser ? <Home /> : <Register />} />
        <Route  path='/write' element={currentUser ? <Write /> : <Register />} />
        <Route  path='/settings' element={currentUser ? <Settings /> : <Register />} />
        <Route  path='/post/:postId' element={<Single />} />
      </Routes>
     
    </Router>
    
  );
}

export default App;
