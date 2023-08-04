import React, { useState } from 'react';
import axios from 'axios';

// Your getCookie function
// Add this function somewhere in your code, preferably before the Login component

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const csrftoken = getCookie('csrftoken'); // Obtain the CSRF token

      const response = await axios.post(
        'http://127.0.0.1:8000/api/api/user/login/',
        { username, password },
        {
          headers: {
            'X-CSRFToken': csrftoken, // Include the CSRF token in the request headers
          },
        }
      );
      alert(response.data.access)
      const kom = response.data.access
      // Assuming your Django backend returns a token upon successful login
      localStorage.setItem('token', kom);
      // Redirect to the Events page upon successful login
      window.location = '/events/';
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form  form onSubmit={handleLogin}>
      <div class="form-group">
        <label for="exampleInputEmail1">username</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input  type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>



    </div>
  );
};

export default Login;
