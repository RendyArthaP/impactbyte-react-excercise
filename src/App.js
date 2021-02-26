import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
  );
}

export default App;
