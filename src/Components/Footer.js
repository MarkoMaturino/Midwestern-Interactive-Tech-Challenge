import { Link } from "@mui/material"



const Footer = () => {
 

  return (
    <div>
        <h1 style={{color: "white", fontSize: "60px"}}><span style = {{textDecoration: "underline", textDecorationColor: "#DEBF79", textUnderlineOffset: "20px", textDecorationThickness: "4px"}}>Heading</span> One</h1>
        <p style={{color: "white", fontSize: "17.5px"}}>Remove the duplicates in 2 Javascript arrays (found in read me), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <Link underline = "none" style = {{color: "#DEBF79"}}>this link</Link> is closed. If the operation has been completed already notify the user that this has already been done</p>
    </div>
  )
}

export default Footer