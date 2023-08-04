import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

  const [firstname, setfirstname] = useState('');

  const [lastname, setlastname] = useState('');

  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    // Add this function somewhere in your code, preferably before the Register component

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


    const csrftoken = getCookie('csrftoken'); // Implement getCookie function to extract the CSRF token from cookies

    try {
      await axios.post('http://127.0.0.1:8000/api/api/user/register/', { username, password, email, firstname, lastname }, {
        headers: {
          'X-CSRFToken': csrftoken,
        },
      });
      // Redirect to the Login page after successful registration
      window.location = '/login/';
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  }
    

  return (
    <div>
      <h2>Register</h2>
      {error && <div>{error}</div>}

      <form onSubmit={handleRegister}>
      <div class="row">
        <div class="col">
    <label for="exampleInputEmail1">FIRST NAME</label>

          <input type="text" class="form-control" 
          placeholder="first_name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}/>
        </div>
        <div class="col">
    <label for="exampleInputEmail1">LAST NAME</label>

          <input class="form-control"  type="test"
          placeholder="last_name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)} />
        </div>
      </div>

      <div class="form-group">
    <label for="exampleInputEmail1">USERNAME</label>
    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>


     <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  type="email"
     placeholder="email"
     value={email}
     onChange={(e) => setemail(e.target.value)} />
     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>


      <div class="form-group">
      <label for="exampleInputEmail1">PASSWORD</label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
    </form>









 
    </div>
  );
};

export default Register;
