
import { useState } from "react";

export default function Home({setData,nav}) {
  
  return (
    <>
      <div id={nav} onClick={(e) =>{
        setData(prev => [...prev,"data from " + e.target.id])}}
        style={{position:"absolute",left:"50%",top:"50%"}}>
        click to pass text {nav} data to header
      </div>
    </>
  )
}
