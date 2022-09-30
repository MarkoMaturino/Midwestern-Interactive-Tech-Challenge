import { Link } from "@mui/material"
import UnorderedList from "../Components/UnorderedList"
import { useState } from "react";



function Footer() {


  const [clicked, setClicked] = useState(false);
  const myFunc = () => alert('Action has already been done');
  const onClick = (event) => {
    if (!clicked) {
      setClicked(true);
     
    }
    else{
      myFunc(event);
    }
  };
  


  return (
    <div>
        <h1 className="headingOneHome"><span>Heading</span> One</h1>
        <p className="paragraphUnderHeadingOneHome">Remove the duplicates in 2 Javascript arrays (found in read me), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <Link onClick = {onClick} underline = "none" style = {{color: "#DEBF79"}}>this link</Link> is clicked. If the operation has been completed already notify the user that this has already been done</p>
        
        {(clicked && (<UnorderedList/>))}
        
        
    </div>
  )
}

export default Footer