import { useContext } from "react"
import ComponentA from "../Components/Functional-Components/Context/ComponentA"
import Header from "../Components/Functional-Components/nav-bar/header"
import { UserDetails } from "../Navigation/navigation"



const AboutScreen=()=>{
   let globalInfo= useContext(UserDetails)
   console.log(globalInfo)

   const ChangeName=()=>{
      globalInfo.ChangeName()
   }
    return(
     <>
     <Header/>
     <h2>AboutScreen</h2>
     <h3>I am from Navigation.js, globalInfo-{globalInfo.username}</h3>
     <button onClick={ChangeName}>ChangeName</button>
     <ComponentA/>
     
     </>
 
    ) 
 }
 export default AboutScreen