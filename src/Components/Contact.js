import { Link } from "@mui/material"
import logo from "../imgs/Logo.png"
import {Button} from "@mui/material"
import {TextField} from "@mui/material"
import {FormControl} from "@mui/material"
const url = "https://api.mwi.dev/content/contact"
let x = ""
let paragraphResult = ""
// data.data[0].content

// const getData = () => fetch(url).then(response => response.json()).then((results) =>{
//   let result = results.data[0].content
//   resolve(result)
// } );  
async function getData(){
  return new Promise((resolve, reject)=>{
    fetch(url)
    .then(response => {return response.json})
    .then(data => {
      let result = data.data[0].content
       resolve(result)
    })
  })
  
}
await getData().then(data => {
  movies = data
});
function Contact() {

  return (
  
    <div>
    
    <div className="Contact" style={{display: "flex", margin: "0"}}>

        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
       
      }`}</style>
        <div className="Left" style={{display: "flex", height: "100vh", width: "50vw", flexDirection: "column", outline: "2px solid red", justifyContent: "space-between" } }> 
          <img src = {logo} alt = "Midwestern Interative" className="Logo" style={{alignSelf: "start", marginLeft: "5vw", marginTop: "5vh"}}></img>
            
          <div style = {{display: "flex",flexDirection: "column", justifyContent: "center", color: "white", marginLeft: "5vw"}}>
              <h1 style={{fontSize: "60px"}}><span style = {{textDecoration: "underline", textDecorationColor: "#DEBF79", textUnderlineOffset: "20px", textDecorationThickness: "4px"}}>Heading</span> One</h1>
              <p style={{fontSize: "17.5px", width:"32vw",margin: "0"}}>{}</p>
  
          </div>
        <p></p>
        </div>
      
      <div className="Right" style={{display: "flex", height: "100vh", width: "50vw", backgroundColor:"white", flexDirection: "column", justifyContent: "space-between"}}>
        <Link style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"5vh", marginRight: "5vw"}} underline="none">home</Link>
        <div className="MainForm" style={{display: "flex", justifyContent:"center"}}>
          <form action="" method="post">
        
            <h2 style = {{fontSize: "30px"}}>Heading two</h2>
            <div className="firstAndLast" style={{display: "flex", gap: "10px", marginBottom: "1vw"}}>
              <TextField id="firstName" label="First Name" style = {{backgroundColor: "#F5F5F5"}} />
              <TextField id="lastName" label="Last Name" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            <div style={{display: "flex", gap: "10px", marginBottom: "1vw"}}>
              <TextField id="title" label="Title" style = {{backgroundColor: "#F5F5F5"}}/>
              <TextField id="email" label="Email" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            <div style={{display: "flex", marginBottom: "1vw"}}>
              <TextField id="message" label="Message" multiline minRows={4}  fullWidth style = {{backgroundColor: "#F5F5F5"}}/>
            </div>
            <div style = {{display: "flex", justifyContent: "center"}}>
            <Button size="large" variant="containted" color = "neutral" style = {{ textTransform: "none", backgroundColor:"#DEBF79", color: "white", borderRadius: 0, marginTop: "1vh"}} >Submit</Button>
            </div>
          </form>
        </div>
      
      <p></p>


        </div>

    </div>
    </div>

  )
}

export default Contact