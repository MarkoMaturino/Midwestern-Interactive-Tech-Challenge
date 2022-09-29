import Headings from "./Headings"
import Rabbit from "../imgs/Rabbit.png"
import Shield from "../imgs/Shield.png"
import Talkie from "../imgs/Talkie.png"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const MainBody = () => {
  const url = "https://api.mwi.dev/content/home"
  const [textInsideHeadings, headingsAreRecevied] = useState(null)
 
  useEffect(()=>{
    axios.get(url)
      .then(res =>{
          headingsAreRecevied(res.data)
      })
  }, [url])
  if(textInsideHeadings){
    console.log(textInsideHeadings)
    return(
      <div className ="mainBody">
      <Headings pText={textInsideHeadings.data[0].content} h1Text ={textInsideHeadings.data[0].title}image = {Talkie}/>
      <Headings pText={textInsideHeadings.data[1].content} h1Text ={textInsideHeadings.data[1].title}image = {Rabbit}/>
      <Headings pText={textInsideHeadings.data[2].content} h1Text ={textInsideHeadings.data[2].title}image = {Shield}/>

    </div>
    )

}
else{
  return(
<div className ="mainBody">
  <Headings pText={""} h1Text ={""}image = {Talkie}/>
  <Headings pText={""} h1Text ={""}image = {Rabbit}/>
  <Headings pText={""} h1Text ={""}image = {Shield}/>

</div>
  )

}

}


export default MainBody