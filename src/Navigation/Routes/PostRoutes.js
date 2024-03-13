import { Route,Routes } from "react-router-dom"

import AboutScreen from "../../Pages/About-Screen"
import HomeScreen from "../../Pages/Home-Screen"
import InvaildScreen from "../../Pages/Invaild-Screen"
import ProfileScreen from "../../Pages/Profile-Screen"
import SettingScreen from "../../Pages/Setting-Screen"
import ProductDetail from "../../Pages/ProductDetail"




const PostRoute=()=>{
return(
    <>
    
    <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/profile" Component={ProfileScreen}/>
        <Route path="/setting" Component={SettingScreen}/>
        <Route path="/about" Component={AboutScreen}/>
        <Route path="*" Component={InvaildScreen}/>

        <Route path="/:category/:id" Component={ProductDetail}/> 
        </Routes>
 
    
    
    </>
)
}
export default PostRoute

//Post Routing:after login pages routes
