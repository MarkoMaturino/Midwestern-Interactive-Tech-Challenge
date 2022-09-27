import Header from './Components/Header'
import Footer from "./Components/Footer"
import MainBody from './Components/MainBody'
import UnorderedList from "./Components/UnorderedList"
import { useState } from 'react'
import Contact from './Components/Contact'

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
    <Contact/>
     

   

  
     
    </div>

  );  
}

export default App;
