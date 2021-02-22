import React, {useState} from 'react'
import './countbutton.css'

const CountButton=(props)=>{
   const [currentCount,setCurrentcount]=useState(0)

   const handleclick=()=>{
           setCurrentcount(currentCount+props.incrimentBy)
   }
   const buttonstyles={
           color:props.buttonColor,
           
           
   }
    return(
    <div className="likebutton">
            <p style={buttonstyles} onClick={handleclick}>Like</p>
            <div className={"count-display"}>{currentCount}</div>
    </div>

    )
}
export default CountButton