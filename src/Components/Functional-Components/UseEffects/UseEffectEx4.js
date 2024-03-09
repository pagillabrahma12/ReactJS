import { useEffect } from "react"

const UseEffectEx4=()=>{

    useEffect(()=>{
    window.addEventListener("mousemove",callbackFunction)


    },[])
const callbackFunction=(event)=>{
    console.log(event.clientX)
    console.log(event.clientY)
}

    return(
        <>
        <h2>Brahma</h2>
        
        
        
        </>
    )





}
export default UseEffectEx4