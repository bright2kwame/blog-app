import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import {
     useHistory, Link 
} from "react-router-dom";

function RegisterComponent() {
    const history = useHistory();

    //MARK: email state
    const [emailState, setEmail] = React.useState({
        email: "",
    })

    //MARK: password state
    const [passwordState, setPassword] = React.useState({
        password: "",
    })

    //MARK: password again state
    const [passwordAgainState, setPasswordAgain] = React.useState({
        passwordAgain: "",
    })

    //MARK: handle input change
    function handleEmailInputChange(event){
        setEmail({
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + emailState.email +  " Password: " + passwordState.password)
    }

    //MARK: handle password input change
    function handlePasswordInputChange(event){
        setPassword({
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + emailState.email +  " Password: " + passwordState.password)
    }

    //MARK: handle password input change
    function handlePasswordAgainInputChange(event){
        setPasswordAgain({
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + emailState.email +  " Password: " + passwordState.password)
    }

    //MARK: handle the register action
    function handleRegister(event){
        event.preventDefault();
        let email = emailState.email
        let password = passwordState.password
        let passwordAgain = passwordAgainState.passwordAgain 

        //MARK: check for empty fields
        if (email === "" || password === "") {
            alert("Fields are required");
            return;
        }

        //MARK: check for password matches
        if (passwordAgain !=  password) {
            alert("Passwords do not match");
            return;
        }

        history.push("/new_post");
        console.log("Logging Email: " + emailState.email +  " Password: " + passwordState.password)
    }

    return (
        <div className ="content-wrapper container text-center">
        <div className="login-form">
        <form action = {handleRegister}>
              <h3 className="text-center">Register</h3>       
              <div className="form-group">
                  <input 
                      name="email"
                      type="email" 
                      value = {emailState.email}
                      onChange = {handleEmailInputChange}
                      className="form-control" 
                      placeholder="Email Address" required="required"/>
              </div>
              <div className="form-group">
                  <input 
                      name="password"
                      type="password" 
                      value = {passwordState.password}
                      onChange = {handlePasswordInputChange}
                      className="form-control" 
                      placeholder="Password" 
                      required="required"/>
              </div>

              <div className="form-group">
                  <input 
                      name="passwordAgain"
                      type="password" 
                      value = {passwordAgainState.passwordAgain}
                      onChange = {handlePasswordAgainInputChange}
                      className="form-control" 
                      placeholder="Password Again" 
                      required="required"/>
              </div>
              <div className="form-group">
                  <button type= "submit" onClick = {handleRegister} className="btn btn-primary btn-block">Log in</button>
              </div>       
          </form>
         <p className="text-center"> Already Have Account ? <Link to="/login" >Login</Link></p>
      </div>
      </div>
    );
  }
  
  export default RegisterComponent;