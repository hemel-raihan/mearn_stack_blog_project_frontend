
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <TopBar />
    <Home />
    </>
    
  );
}

export default App;
