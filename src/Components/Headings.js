import { Box } from "@mui/system"
import { Button} from "@mui/material"


function Headings(props) {
  

  return (
    <Box className = "Box" sx = {{
        borderRadius: "4px",
        aspectRatio: "1/1",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "none",
        
        
        
    }} width={.68} height={.68} >
    
        <img className = "imgInsideHeadings" src = {props.image}></img>
      
        <h1 className = "h1InsideHeadings" >{props.h1Text}</h1>
        <p className = "pInsideHeadings">{props.pText}</p>
      
       
        <Button size="large" variant="containted" color = "neutral" style = {{ textTransform: "none", backgroundColor:"#DEBF79", color: "white", borderRadius: 0}}>Learn More</Button>
    </Box>
   
    
   
  )
  
}


export default Headings