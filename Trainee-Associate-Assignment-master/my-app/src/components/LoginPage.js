import React, { useState } from "react";
import './loginPage.css';
import axios from 'axios'
import '../App.js'
import { useNavigate } from "react-router-dom";




export default function Login(){
    // const navigate = useNavigate();
    

    const [data,setData]  = useState({
        email:'',
        password:'',
    }
    );
    

    const onChangeEmail = (e) => {
        
        setData({...data,email:e.target.value})
    }

    const onChangePassword = (e) => {
        
        setData({...data,password:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost/bizlogic/login.php",data)
        .then(res=>{
            console.log(res);
            console.log("res status : "+res.status);
            if(res.status===201){
    
                window.sessionStorage.setItem("isLoggin","login");
                window.location.href="/userList";
                // let path = `/userList`; 
                // navigate(path);

                
    
            }else if(res.status===200){
                alert("Invalid email or password!")
                
            }
         
        })
    }



    return(
        <div className="login-body">
                <div className="login">
                    <div className="login-container">
                    <h1 className="title">Welcome Back</h1> 

                    <div className="form-group">
                        <label className="input-label">Email : </label>
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Enter the Email" onChange={onChangeEmail}/>
                    </div>

                    <div className="form-group">
                        <label className="input-label">Password : </label>
                        <input type="password" className="form-control" id="password" placeholder="Enter the Password" onChange={onChangePassword}/>
                    </div>

                    <button type="submit" className="login-button" onClick={handleSubmit}>Sign In</button>
            
                </div>
                </div>
            </div>
    );
}