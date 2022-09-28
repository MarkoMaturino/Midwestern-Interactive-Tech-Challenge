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
        margin: "none"
        
    }}>
    <img src = {props.image}></img>
      
        <h1 className = "h1InsideHeadings" style={{fontSize: "2rem", marginBottom: 0}}>Heading Two</h1>
        <p className = "pInsideHeadings" style={{color: "#858585", fontSize: ".1em", width:"75%", lineHeight: "20px", textAlign: "left", wordSpacing: ".5em", fontSize: "15px", borderRadius: 0}}>Intenger accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus</p>
      
       
    <Button size="large" variant="containted" color = "neutral" style = {{ textTransform: "none", backgroundColor:"#DEBF79", color: "white", borderRadius: 0}}>Learn More</Button>
    </Box>
   
    
   
  )
  
}


export default Headings