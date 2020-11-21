import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Login.css'
import {
  useHistory, Link
} from "react-router-dom";

function LoginComponent() {
    const history = useHistory()
  
    //MARK: email state
    const [emailState, setEmail] = React.useState({
        email: ""
    })

    //MARK: password state
    const [passwordState, setPassword] = React.useState({
        password: "",
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

    //MARK: handel the login here
    function handleLogin(event){
        let validEmail = emailState.email;
        let validPassword = passwordState.password;
        
        //MARK: no email
        if (validEmail === "" || validPassword === ""){
            alert("Provide valid login details")
            return 
        } 
        
        //MARK: has valid email and valid password 
        if (validEmail.length != 0 && validPassword.length != 0){
            history.push("/new_post");
        }
    }

  return (
    <div className ="content-wrapper container text-center">
      <div className="login-form">
      <form>
            <h3 className="text-center">Log in</h3>       
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
                <button type= "submit" onClick = {handleLogin} className="btn btn-primary btn-block">Log in</button>
            </div>
            <div className="clearfix">
                <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                <Link className="float-right">Forgot Password?</Link>
            </div>        
        </form>
       <p className="text-center"> New Here ? <Link to="/register" >Create an Account</Link></p>
    </div>
    </div>
  );
}
export default LoginComponent;
