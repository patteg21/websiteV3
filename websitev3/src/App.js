import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import About from './About/About';
import Home from "./Home/Home"
import Projects from './Projects/Projects';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
    <TopBar />
    <div className='ALL-PAGES'>
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>  
      </Routes>
    </div>
    </div>
  );
}

export default App;
