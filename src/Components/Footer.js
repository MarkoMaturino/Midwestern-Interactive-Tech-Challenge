import { Link } from "@mui/material"
import UnorderedList from "../Components/UnorderedList"
import { useState } from "react";



function Footer() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    

   
  };


  return (
    <div>
        <h1 className="headingOneHome"><span>Heading</span> One</h1>
        <p className="paragraphUnderHeadingOneHome">Remove the duplicates in 2 Javascript arrays (found in read me), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <Link onClick = {handleClick} underline = "none" style = {{color: "#DEBF79"}}>this link</Link> is clicked. If the operation has been completed already notify the user that this has already been done</p>
        
        {(isShown && (<UnorderedList/>) &&(count +=1))}
        
        
    </div>
  )
}

export default Footer