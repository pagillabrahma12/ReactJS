
import { useState } from "react";
import "./reg.css"
const RegistartionForm = () => {
    // Creation of states
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confimpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [course, setCourse] = useState("");

    // Errors
    const [emailError, setEmailError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confimpasswordError, setConfirmPasswordError] = useState(null);

    // Form validations
    // email
    const handleEmail = (event) => {
        let enteredEmail = event.target.value;
        setEmail(enteredEmail);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validEmail = emailRegex.test(enteredEmail);
        if (!validEmail) {
            setEmailError("Enter correct email address");
        } else {
            setEmailError(null);
        }
    };

    // username
    const handleUsername = (event) => {
        let enteredUsername = event.target.value;
        setUsername(enteredUsername);

        if (enteredUsername.length < 3 || !isNaN(enteredUsername)) {
            setUsernameError("Enter valid username");
        } else {
            setUsernameError(null);
        }
    };

    // phone validation
    const handlePhone = (event) => {
        const enteredNumber = event.target.value;
        setPhone(enteredNumber);
        if (enteredNumber.length === 0 || isNaN(enteredNumber) || enteredNumber.length !== 10) {
            setPhoneError("Enter a valid 10-digit mobile number only");
        } else {
            setPhoneError(null);
        }
    };

    // password validation
    const handlePassword = (event) => {
        const enteredPassword = event.target.value;
        setPassword(enteredPassword);
    };

    const handleConfirmPassword = (event) => {
        const enteredConfirmPassword = event.target.value;
        setConfirmPassword(enteredConfirmPassword);

        if (enteredConfirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError(null);
        }
    };

    // location
    const handleLocation = (event) => {
        const enteredLocation = event.target.value;
        setLocation(enteredLocation);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform form validation
        if (!email || !username || !password || !confimpassword || !phone || !location) {
            alert("Please fill out all fields");
            return; 
        }
    
        if (emailError || usernameError || phoneError || confimpasswordError) {
            alert("Please fix validation errors before submitting");
            return; 
        }
    
        // localStorage
        const userdata = { email, username, password, confimpassword, phone, location };
        localStorage.setItem("RegisteredData", JSON.stringify(userdata));
    
        // Clear form fields after successful submission
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setLocation("");
        setGender("");
    
        alert("Registration successful");
    };
    
    return (
        <>
            <div className="Container">
                <h2>Registration Form</h2>
                <form >
                    {/* email */}
                    <input
                        type="email"
                        name="email"
                        className="formstyle"
                        placeholder="Enter Email"
                        value={email}
                        required
                        onChange={handleEmail}
                        style={{ border: emailError ? "1px solid red" : "1px solid green", width: "200px" }}
                    />
                    {emailError && <span style={{ color: "red" }}>{emailError}</span>}
                    <br />
                    <br />
                    {/* username */}
                    <input
                        type="text"
                        name="Username"
                        className="formstyle"
                        placeholder="Enter Username"
                        value={username}
                        onChange={handleUsername}
                        style={{ border: usernameError ? "1px solid red" : "1px solid green", width: "200px" }}
                    />
                    {usernameError && <span style={{ color: "red" }}>{usernameError}</span>}
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        className="formstyle"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePassword}
                        style={{ width: "200px" }}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="confirmpassword"
                        className="formstyle"
                        placeholder="Re-enter Password"
                        value={confimpassword}
                        onChange={handleConfirmPassword}
                        style={{ border: confimpasswordError ? "1px solid red" : "1px solid green", width: "200px" }}
                    />
                    {confimpasswordError && <span style={{ color: "red" }}>{confimpasswordError}</span>}
                    <br />
                    <br />
                    <input
                        type="text"
                        name="phone"
                        className="formstyle"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={handlePhone}
                        style={{ border: phoneError ? "1px solid red" : "1px solid green", width: "200px" }}
                    />
                    {phoneError && <span style={{ color: "red" }}>{phoneError}</span>}
                    <p>Select the Gender</p>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                      //  checked={gender === "male"}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                       // checked={gender === "female"}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label>Female</label>
                    <br />
                    <label For="location">Choose a Location:</label>
                    <select
                        name="location"
                        id="location"
                        className="formstyle"
                        onChange={handleLocation}
                        style={{ width: "200px" }}
                        value={location}
                    >
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="L.b.nagar">L.b.Nagar</option>
                        <option value="Naglonda">Naglonda</option>
                        <option value="Medak">Medak</option>
                    </select>
                    <br />
                    <br />
                  
                    <input type="submit" value="Login" onClick={handleSubmit}/>
                </form>
            </div>
        </>
    );
};
export default RegistartionForm;
