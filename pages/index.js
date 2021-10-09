import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";
import { useState } from "react";

export default function Home() {
  const [nav,setNav] = useState("Campaign");
  const [data,setData] = useState([]);
  return (
    <>
      <Header nav={nav} data={data} />
      <Sidebar nav={nav} setNav={setNav} />
      <div id={nav} onClick={(e) =>{
        setData(prev => [...prev,"data from " + e.target.id])}}
       style={{position:"absolute",left:"50%",top:"50%"}}>
        click to pass text {nav} data to header
        </div>
    </>
  )
}
