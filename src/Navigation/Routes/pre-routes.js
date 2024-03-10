import { Route,Routes } from "react-router-dom"

import LogInScreen from "../../Pages/LogInScreen"
import InvaildScreen from "../../Pages/Invaild-Screen"




const PreRoute=()=>{
return(
    <>
    
    <Routes>
        <Route path="/" Component={LogInScreen}/>
        <Route path="*" Component={InvaildScreen}/>
     
        </Routes>
 
    
    
    </>
)
}
export default PreRoute

//Pre-routes:before login page rotues
