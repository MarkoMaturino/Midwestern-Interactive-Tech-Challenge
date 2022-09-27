import React, { Component } from 'react'
let arr1 = ["Matt Johnson", "Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"]
let arr2 = ["Matt Johnson", "Bart Paden", "Bart Paden", "Jordan Heigle", "Jordan Heigle", "Tyler Viles"]
let combinedArray = [...arr1, ...arr2]
combinedArray = new Set(combinedArray)
combinedArray = Array.from(combinedArray)
export class UnorderedList extends Component {
    
    render() {
        return (
          <div className="navigation">
            <ul style={{color : "white"}}>
                {combinedArray.map((name, i) => {
                    return <li>{name}</li>
                })}
            </ul>
          </div>
        );}
}

export default UnorderedList