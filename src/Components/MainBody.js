import Headings from "./Headings"
import Rabbit from "../imgs/Rabbit.png"
import Shield from "../imgs/Shield.png"
import Talkie from "../imgs/Talkie.png"

const MainBody = () => {
  return (
    
    <div className ="MainBody" style={{display: "flex", gap:"2%"}}><Headings image = {Talkie}/><Headings image = {Rabbit}/><Headings image = {Shield}/>


    </div>

  )
}

export default MainBody