import React, { useEffect, useState } from 'react';
import  './login.css'

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../CONTEXTAPI/mycontext';
function LoginPage() {

    var authToken = ""
    const navigate = useNavigate();
    const { Postfunction , token, usersdataarray  ,usersdata } = useContext(MyContext)
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const[tokenlo , settokenlo] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const Role = async () => {

        try {
          const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/currentuser/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`,
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            if (data.role ==="admin"){
                navigate('/useform');

            }
            else if (data.role === "tpo"){
                navigate('/tpoform');

            }

            
          } else {
            setError('Login failed');
      
          }
        } catch (error) {
          setError('An error r occurred');
        }
      };





    const handleLogin = async () => {
        try {
            const response = await fetch('https://komaldhotepythonanywhere.pythonanywhere.com/Login_adins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                
                authToken = data.access; 
                if(authToken != "null"){

                    localStorage.setItem("token", authToken)
                    console.log("main",authToken)
    
                    Role()

                }
                else{
                    handleLogin()
                }
                // Assuming the token key in the response is "token"
             
                // Store the token in local storage
            } else {
             
                setError('username or password is wrong ');
            }
        } catch (error) {
            setError('An error lll');
        }

       
     
          
    };


    useEffect(() => {
        usersdata();
      }, []);

    return (
        <div>
        <div className="svcegalalrybag">  
            <h1 class= "loginh2">Login</h1>
            </div>
            {error && <p>{error}</p>}
            
              







                <div class='bold-line'></div>
                <div class='container'>
                  <div class='window'>
                    <div class='overlay'></div>
                    <div class='content'>
                      <div class='welcome'>Hello There!</div>
                      <div class='subtitle'>We're almost done. Before using our services you need to Login an account.</div>
                      <div class='input-fields'>
                        <input         type="text"
                        name="username"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleInputChange}  class='input-line full-width'></input>
                       
                        <input   type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleInputChange} class='input-line full-width'></input>
                
                      </div>
                      <p className="forgetpassword">Forget Password</p>
                     
                      <div><button class='ghost-round full-width'  onClick={handleLogin} >Login Account</button></div>
                    </div>
                  </div>
                </div>




         
        </div>
    );
}

export default LoginPage;
