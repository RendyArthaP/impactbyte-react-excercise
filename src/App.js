import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Biodata from './pages/Biodata/Biodata';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/biodata" component={Biodata}/>
    </Router>
  );
}

export default App;
