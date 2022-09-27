import { Link } from "@mui/material"
import logo from "../imgs/Logo.png"


function Contact() {
  return (
    <div>
    
    <div className="Contact" style={{display: "flex", margin: "0"}}>

        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }`}</style>
        <div className="Left" style={{display: "flex", height: "100vh", width: "50vw", flexDirection: "column"} }> 
        <img src = {logo} alt = "Midwestern Interative" className="Logo" style={{alignSelf: "start", justifySelf: "start", marginLeft: "5vw", marginTop: "5vh"}}></img>
        <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20vh"}}>
        <h1 style={{color: "white", fontSize: "60px"}}><span style = {{textDecoration: "underline", textDecorationColor: "#DEBF79", textUnderlineOffset: "20px", textDecorationThickness: "4px"}}>Heading</span> One</h1>
            <p style={{color: "white", fontSize: "17.5px", width:"32vw"}}>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna alique</p>
            <p style={{color: "white", fontSize: "17.5px", width:"32vw"}}>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consecteur Lorem</p>
          </div>
        </div>
      <div className="Right" style={{display: "flex", height: "100vh", width: "50vw", backgroundColor:"white"}}>
      <Link style= {{fontSize: 20, color: "#DEBF79"}} underline="none">home</Link>

        <form action="/my-handling-form-page" method="post">
  
    
      <input type="text" id="name" name="user_name" placeholder="name"/>
  
      <input type="email" id="mail" name="user_email" placeholder="Email"/>
 
      
      <textarea id="msg" name="user_message"placeholder="Message"></textarea>
 
      </form>


        </div>

    </div>
    </div>

  )
}

export default Contact