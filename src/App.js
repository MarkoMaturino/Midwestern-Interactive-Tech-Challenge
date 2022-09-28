import Header from './Components/Header'
import Footer from "./Components/Footer"
import MainBody from './Components/MainBody'
import UnorderedList from "./Components/UnorderedList"
import { useState } from 'react'
import Contact from './Components/Contact'
import Logo from "./imgs/Logo.png"
import { Link } from '@mui/material'

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (

    <div className="App">
      
      <div className="header">
            <img src = {Logo} alt = "Midwestern Interative" className="logoHomePage"></img>
            <Link style= {{fontSize: 20, color: "#DEBF79"}} underline="none">contact</Link>
      </div>
      
      <MainBody/> 
      <div className= "footer">
        <h1 className="headingOneHome"><span>Heading</span> One</h1>
        <p className="paragraphUnderHeadingOneHome">Remove the duplicates in 2 Javascript arrays (found in read me), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <Link underline = "none" style = {{color: "#DEBF79"}}>this link</Link> is closed. If the operation has been completed already notify the user that this has already been done</p>
      </div>
     

   

  
     
    </div>

  );  
}

export default App;
