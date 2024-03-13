import { useState } from "react"
import ComponentB from "./ComponentB"



const ComponentA=()=>{
    const[name,setname]=useState("Dheeraj")
    return(
        <>
       <ComponentB name={name}/>

        </>
    )
}

export default ComponentA

// Context Api: Context is used to communicate the data globally with out the prop drilling

//steps:
//1.indentify the data to be forwarded ,for wrapping
//2.create a context using createContext method for global data share
//3.wrap the context for which data to be forwarded
//4.consume the data using ueContext hook