
import { useState } from 'react'
import Home from './Components/Home';
import Contact from "./Components/Contact"
import ErrorPage from './Components/ErrorPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  
     

    </Router>
  );  
}

export default App;
