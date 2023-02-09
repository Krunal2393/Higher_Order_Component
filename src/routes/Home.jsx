import React from "react";
import Hoc from "../Component/Hoc";


const Home = ({counter,Increament})  => {

  return(
    <>
    <div style={{background: "pink", textAlign:"center"}}>
    <div>
      Home : {counter}
    </div>
    <button onClick={Increament}>increase</button>
    </div>
    </>

  )
}

export default Hoc(Home)