import React from "react";
import Hoc from "../Component/Hoc";


const About = ({counter,Increament})  => {

  return(
    <>
    <div style={{background:"red", textAlign:"center"}}>
    <div >
      Home : {counter}
    </div>
    <button onMouseOver={Increament} >increase</button>
    </div>
    </>

  )
}

export default Hoc(About)