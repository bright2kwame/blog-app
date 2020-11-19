import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Home.css'
import {
  Link
} from "react-router-dom";

function LoginComponent() {
  
    const [state, setState] = React.useState({
        email: "",
        password: "",
        emailError: ""
    })

    //MARK: handle input change
    function handleInputChange(event){
      setState({
        ...state,
         [event.target.name]: event.target.value
        });
        console.log("Logging Email: " + state.email +  " Password: " + state.password)
    }

    //MARK: handel the login here
    function handleLogin(event){
        let validEmail = state.email;
        let validPassword = state.password;
        
        //MARK: no email
        if (validEmail.length === 0){
            setState({
                ...state,
                 "emailError": "Invalid Email"
                });
        } else 
        //MARK: has valid email and valid password 
        if (validEmail.length != 0 && validPassword.length != 0){
            setState({
                ...state,
                 "emailError": ""
                });

            //MARK: post to server
            alert("Logging Email: " + state.email +  " Password: " + state.password);  
           
            setState({
                "email" : "",
                "password" : "",
                 "emailError": ""
                });
            
        }

    }

  return (
    <div className="home-wrapper">
        <form action = {handleLogin}>
            <div>
                <label className="text-danger">{state.emailError}</label>   
                <input name="email" required value={state.email} onChange={handleInputChange} className="form-control" type="email" placeholder="Enter email"/>
            </div>
            <div>
                <input  name="password" required  value={state.password} onChange={handleInputChange} className="form-control" type="password" placeholder="Enter password"/>
            </div>
            <button onClick = {handleLogin} className= "btn btn-primary">Login</button>
        </form>
    </div>
  );
}
export default LoginComponent;
