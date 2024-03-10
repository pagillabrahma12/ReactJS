import { BrowserRouter } from "react-router-dom"

import PostRoute from "./Routes/PostRoutes"
import PreRoute from "./Routes/pre-routes"

const NavigationStack=()=>{
return(
    <BrowserRouter>
 
    {
       true
        ?
        <PostRoute/>
        :
       <PreRoute/>
    }




    </BrowserRouter>
)

}
export default NavigationStack




//react-router-dom


// Post Routing

// 1.home
// 2.about
// 3.profile
// 4.setting


//Pre-Routing
//1.Login
// 2.register
// 3.otp
// 4.forgot password