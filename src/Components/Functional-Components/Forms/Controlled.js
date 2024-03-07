import  { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
const Controlled=()=>{

    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const[usernameError,setusenameError]=useState(null)

// Assuming this code is within a function or event handler
const handleUsernameInput=(event)=> {
  let usernameInput = event.target.value;
  setusername(usernameInput); 
  if (usernameInput.length > 5) {
  showError()
    }
    else{
       setusenameError(null)
    }
  }
  const showError=()=>{
  setusenameError("username must be less than 5 characters")

  }

  const handleUserPassword=(event)=> {
    let passwordInput = event.target.value;
    setusername(passwordInput); 
    if (passwordInput.length > 5) {
    
      }
      else{
         setusenameError(null)
      }
    }
   


  return(
    <>
    <h1>Controlled Components</h1>
    
    <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={username}
      onChange={handleUsernameInput}
      style={{border:usernameError ? "2px solid red":"3px"}}
    />
    {
      usernameError
      ?
      <span style={{color:"red"}}>{usernameError}</span>
      :
      null

    }
   
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      value={password}
    />
  </div>
  {/* <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div> */}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
 
    </>
  )

}
export default Controlled

//steps to create Controlled components

//1. take a input form with input elements

//2. create a local state using useRef hook

//3.attach the loacl state to theinput using value attribute.

//4.give onChange handler (as a attribute) collect the user length via event.target,value

//5.collect and validate then user details