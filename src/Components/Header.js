import logo from "../imgs/Logo.png"
import { Link } from "@mui/material"
import "../index.css"


const Header = () => {
  return (
    <div>
        <div className= "Header">
            <img src = {logo} alt = "Midwestern Interative" className="Logo"></img>
            <Link style= {{fontSize: 20, color: "#DEBF79"}} underline="none">contact</Link>

        </div>   
    </div>

  )
}

export default Header