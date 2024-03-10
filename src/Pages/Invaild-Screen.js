import { useNavigate } from "react-router-dom"


const InvaildScreen=()=>{
    const navigate=useNavigate()
    const handleRoute=()=>{
        navigate("/")
    }
   return(
    <>
    <h2>404 Error</h2>
      
<button onClick={handleRoute}>Go to Home Page</button>
    
    </>

   ) 
}
export default InvaildScreen

//UseNavigate: 
            //it is a hook which is used to navigate  or shift bewteen the pages(or) screens through j.s fubnctions
            //it is not react hook.it is provided by react-router-dom hook 