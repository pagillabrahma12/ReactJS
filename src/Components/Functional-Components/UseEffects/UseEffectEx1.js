import {useState, useEffect } from "react"


const UseEffect=()=>{

    const[counter,setcounter]=useState(0)
    const[counter1,setcounter1]=useState(0)

    useEffect(()=>{
        console.log("useEffect")
    },)

const handlerIncrement=()=>{
    setcounter(counter+1)
}

const handlerIncrement1=()=>{
    setcounter1(counter+10)
}

    return(
        <>
        <h1>Use Effect</h1>
        <h2>count{counter}</h2>
        <button onClick={handlerIncrement}>Increment</button>

        <h2>count---{counter1}</h2>
        <button onClick={handlerIncrement1}>Increment---1</button>
        
        </>
    )
}
export default UseEffect
//1. if we remove dependecy array---->useEffect will re-render for every state or prop changes

//2.if we keep an empty array----> useEffect will act like a component  did mount that means once in a life cycle it runs 

//3.if a array is with state or props--->yseEffect will act like component did update that means every time component updates it will re-executes

//4.id callbbcak returns the funcvtion we can prevent leaks----> use Effefct will act like a componentwillmound