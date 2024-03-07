import { useRef } from "react"



const Uncontrolled=()=>{
   const UserNameRef= useRef(null)
    const passwordRef=useRef(null)


    const HandleSubmit=(event)=>{
        event.preventDefault()
        const username=UserNameRef.current.value
        const password=passwordRef.current.value



        if(username.length>5){
            alert("enter less than 5 characters")
        }

    }

    return(
    <>
    <h1>Uncontrolled components examples</h1>
    <form onSubmit={HandleSubmit}>
    <input type="text" name="username" ref={UserNameRef}/>
    <input type="password" name="username" ref={passwordRef}/>
    <input type="submit" />



    </form>
    
    </>    


    )



}
export default Uncontrolled 