import React from 'react'


function ErrorPage() {
  return (
    <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
     
       
      }`}</style>
        <p style={{color: "white", fontSize: "5vw"}}>ERROR: Invalid Page :(</p>
    </div>
  )
}

export default ErrorPage