import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headings from "./Headings"
import Rabbit from "../imgs/Rabbit.png"
import Shield from "../imgs/Shield.png"
import Talkie from "../imgs/Talkie.png"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


function Home() {
  // API FOR HEADINGS START
  const url = "https://api.mwi.dev/content/home"
  const [data, dataRecevied] = useState(null)
 
  useEffect(()=>{
    axios.get(url)
      .then(res =>{
          dataRecevied(res.data)
      })
  }, [url])
  // API FOR HEADINGS END
  
  
  if(data){return (
    <div className='HomePage'>
        <Header />
          <div className ="mainBody">
            <Headings pText={data.data[0].content} h1Text ={data.data[0].title}image = {Talkie}/>
            <Headings pText={data.data[1].content} h1Text ={data.data[1].title}image = {Rabbit}/>
            <Headings pText={data.data[2].content} h1Text ={data.data[2].title}image = {Shield}/>
          </div>
        <Footer />
        
    </div>
  )
}
else{
  return(
    <div className='HomePage'>
      <Header />
        <div className ="mainBody">
    
        </div>
      
      <Footer />
    
    </div>
    
  )
}
}

  







export default Home