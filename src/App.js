import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from './components/terms/terms';
import Privacy from './components/privacy/privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/terms' element={<Terms/>}></Route>
      <Route path='/privacy' element={<Privacy/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
