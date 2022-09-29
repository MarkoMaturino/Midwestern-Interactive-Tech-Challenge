import logo from "../imgs/Logo.png"
import { Link } from "@mui/material"
import "../index.css"


const Header = () => {
  return (
    <div>
        <div className= "header">
            <img src = {logo} alt = "Midwestern Interative" className="logoHomePage"></img>
            <Link style= {{fontSize: 20, color: "#DEBF79"}} underline="none">contact</Link>

        </div>   
    </div>

  )
}

export default Header
{/* <Router>

<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>



</Router> */}
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
