import { BrowserRouter } from "react-router-dom"
import PostRoute from "./Routes/PostRoutes"
import PreRoute from "./Routes/pre-routes"
import { createContext, useState } from "react"

 export const UserDetails=createContext()

const NavigationStack=()=>{
    const[username,setusername]=useState("Brahma")

    const ChangeName=()=>{
        setusername("ANU")
    }

return(
    <BrowserRouter>

    <UserDetails.Provider value={{
        username,
        ChangeName
    }}>

    {
       true
        ?
        <PostRoute/>
        :
       <PreRoute/>
    }
     </UserDetails.Provider>
    </BrowserRouter>
   
)

}
export default NavigationStack




// Context Api: Context is used to communicate the data globally with out the prop drilling

//steps:
//1.indentify the data to be forwarded ,for wrapping
//2.create a context using createContext method
//3.wrap the context for which data to be forwarded,using provider with value attribute
//4.consume the data using ueContext hook