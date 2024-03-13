import { useContext } from "react"
import Header from "../Components/Functional-Components/nav-bar/header"
import { UserDetails } from "../Navigation/navigation"



const SettingScreen=()=>{
    const UserInfo=useContext(UserDetails)
    return(
     <>
     <Header/>
     <h2>SettingScreen--{UserInfo.username}</h2>
     
     </>
 
    ) 
 }
 export default SettingScreen