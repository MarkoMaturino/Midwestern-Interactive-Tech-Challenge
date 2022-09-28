import { Link } from "@mui/material"
import logo from "../imgs/Logo.png"
import {Button} from "@mui/material"
import {TextField} from "@mui/material"



  

function Contact() {


  return (
  
    <div>
    
    <div className="contact">

        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
     
       
      }`}</style>
        <div className="Left"> 
          <div className="logoAndHome">
          <img src = {logo} alt = "Midwestern Interative" className="LogoContactPage"></img>
            
          <Link className="homelinkMobileView" style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"5vh", marginRight: "5vw"}} underline="none">home</Link>
           
          </div>
            
          <div className = "headingOneAndMainText">
              <h1 className = "headingOne"><span class="underline">Heading</span> One</h1>
              <p className = "mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui  minim veniam, quisofficia deserunt mollit anim id est laborum</p>
  
          </div>
        <p></p>
        </div>
      
      <div className="Right">
        <Link className = "homelinkDesktopView"style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"5vh", marginRight: "5vw"}} underline="none">home</Link>
        <div className="mainForm">
          <form action="" method="post">
        
            <h2 className = "headingTwo">Heading two</h2>
            <div className="firstAndLast">
              <TextField id="firstName" label="First Name" style = {{backgroundColor: "#F5F5F5"}} />
              <TextField id="lastName" label="Last Name" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            <div className = "titleAndEmail">
              <TextField id="title" label="Title" style = {{backgroundColor: "#F5F5F5"}}/>
              <TextField id="email" label="Email" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            <div className="message">
              <TextField id="message" label="Message" multiline minRows={4}  fullWidth style = {{backgroundColor: "#F5F5F5"}}/>
            </div>
            <div className = "buttonContainer">
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