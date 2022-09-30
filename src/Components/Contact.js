import { Link } from "@mui/material"
import logo from "../imgs/Logo.png"
import {Button} from "@mui/material"
import {TextField} from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { styled } from '@mui/material/styles';

// Stylizied TextField for form
const CssTextField = styled(TextField)({
 
 
  "& .MuiInputBase-root":{
    color: "#858585",

  },
  "& label": {
    color: "#858585"
  },
  '& label.Mui-focused': {
    color: '#858585',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F5F5F5',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F5F5F5',
    },
    '&:hover fieldset': {
      borderColor: '#F5F5F5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F5F5F5',
    },
    
  }   
 
  

  },
);





  

function Contact() {
  // API FOR HEADER START
  const url = "https://api.mwi.dev/content/contact"
  const navigate = useNavigate()
  const [data, dataRecevied] = useState(null)
  useEffect(()=>{
    axios.get(url)
      .then(res =>{
          dataRecevied(res.data)
      })
  }, [url])
  // API FOR HEADER END

// FORM SECTION JS Start
  const sumbitFormUrl = "https://api.mwi.dev/contact"
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

 

 const handleSubmit = (e) => {
  e.preventDefault()
  
  if(first_name && last_name && email && title && message){
    let finalSubmit = {first_name, last_name, email, title, message}
    console.log(finalSubmit)
    fetch(sumbitFormUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: finalSubmit
    })
    .then(()=>{
      console.log("OBJECT SENT")
    })

  }
 }
//  Form Section End JS
  
  if(data){
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
            
            <Link onClick ={()=>{
            navigate("/")
            }}className="homelinkMobileView" style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"5vh", marginRight: "5vw", fontWeight: 600}} underline="none">home</Link>
           
          </div>
          
          <div className = "headingOneAndMainText">
              
              <h1 className = "headingOne"><span class="underline">{data.data[0].title}</span> One</h1>
              <p className = "mainText">{data.data[0].content}</p>
  
          </div>
          {/* Invisble Paragraph for layout */}
                              <p></p>
        </div>
      
      <div className="Right">
        <Link onClick = {()=>{
          navigate("/")
        }}className = "homelinkDesktopView"style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"8.5vh", marginRight: "4.5vw", fontWeight: 600}} underline="none">home</Link>
        <div className="mainForm">
          <form onSubmit={handleSubmit}>
        
            <h2 className = "headingTwo">Heading two</h2>
            
            <div className="firstAndLast">
              <CssTextField onChange={(e)=> setFirstName(e.target.value)} id="firstName" label="First Name" style = {{backgroundColor: "#F5F5F5"}} />
              <CssTextField onChange={(e)=> setLastName(e.target.value)}id="lastName" label="Last Name" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            
            <div className = "titleAndEmail">
              <CssTextField  onChange={(e)=> setTitle(e.target.value)} id="title" label="Title" style = {{backgroundColor: "#F5F5F5"}}/>
              <CssTextField onChange={(e)=> setEmail(e.target.value)} id="email" label="Email" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            
            <div className="message">
              <CssTextField  onChange={(e)=> setMessage(e.target.value)}id="message" label="Message" multiline minRows={5}  fullWidth style = {{backgroundColor: "#F5F5F5"}}/>
            
            </div>
            
            <div className = "buttonContainer">
              <Button type ="sumbit"  size="large" variant="containted" color = "neutral" style = {{ textTransform: "none", backgroundColor:"#DEBF79", color: "white", borderRadius: 0, marginTop: "1vh"}} >Submit</Button>
            </div>
          </form>
        </div>
       {/* Invisble Paragraph for layout */}
                                      <p></p>


        </div>

    </div>
    </div>

  )
}
else{
  return(
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
            
          <Link onClick ={()=>{
            navigate("/")
          }}className="homelinkMobileView" style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"5vh", marginRight: "5vw"}} underline="none">home</Link>
           
          </div>
            
          <div className = "headingOneAndMainText">
              <h1 className = "headingOne"><span class="underline"></span></h1>
              <p className = "mainText"></p>
  
          </div>
          {/* Invisble Paragraph for layout */}
                                        <p></p>
        </div>
      
      <div className="Right">
        <Link onClick = {()=>{
          navigate("/")
        }}className = "homelinkDesktopView"style= {{fontSize: 20, color: "#DEBF79", alignSelf: "end", marginTop:"8.5vh", marginRight: "4.5vw"}} underline="none">home</Link>
               <div className="mainForm">
          <form onSubmit={handleSubmit}>
        
            <h2 className = "headingTwo">Heading two</h2>
            
            <div className="firstAndLast">
              <CssTextField onChange={(e)=> setFirstName(e.target.value)} id="firstName" label="First Name" style = {{backgroundColor: "#F5F5F5"}} />
              <CssTextField onChange={(e)=> setLastName(e.target.value)}id="lastName" label="Last Name" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            
            <div className = "titleAndEmail">
              <CssTextField  onChange={(e)=> setTitle(e.target.value)} id="title" label="Title" style = {{backgroundColor: "#F5F5F5"}}/>
              <CssTextField onChange={(e)=> setEmail(e.target.value)} id="email" label="Email" style = {{backgroundColor: "#F5F5F5"}} />
            </div>
            
            <div className="message">
              <CssTextField  onChange={(e)=> setMessage(e.target.value)}id="message" label="Message" multiline minRows={4}  fullWidth style = {{backgroundColor: "#F5F5F5"}}/>
            </div>
            
            <div className = "buttonContainer">
              <Button type ="sumbit"  size="large" variant="containted" color = "neutral" style = {{ textTransform: "none", backgroundColor:"#DEBF79", color: "white", borderRadius: 0, marginTop: "1vh"}} >Submit</Button>
            </div>
          
          </form>
        
        </div>
            {/* Invisble Paragraph for layout */}
                              <p></p>
        </div>
      
  


        </div>

    </div>
   
  )
}
}
export default Contact