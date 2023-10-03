import Login from './Login'
import Signup from './Signup'
import NavigationBar from './NavigationBar';
import Home from './Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;