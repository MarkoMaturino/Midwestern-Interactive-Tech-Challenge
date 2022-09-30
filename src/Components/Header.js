import logo from "../imgs/Logo.png"
import { Link } from "@mui/material"
import "../index.css"
import { useNavigate } from "react-router-dom"


function Header(){
  const navigate = useNavigate()
  return (
    <div>
        <div className= "header">
            <img src = {logo} alt = "Midwestern Interative" className="logoHomePage"></img>
            <Link onClick ={()=>{
              navigate("/contact")
            }}style= {{fontSize: 20, color: "#DEBF79", fontWeight: 600}} underline="none">contact</Link>

        </div>   
    </div>

  )
}

export default Header

