import './Contactus.css';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react';
import { MyContext } from '../../ADMINPANEL/CONTEXTAPI/mycontext';
function ContactUs() {
  // Define state variables for contact information
  const{AdmisinAddFunction} = useContext(MyContext)
  const [name, setName] = useState('Komal dhote ');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formDataToSend = new FormData();
    formDataToSend.append('name',name);
    formDataToSend.append('email', email);
    formDataToSend.append("phone_number", contactNo);
    formDataToSend.append("query", message);


    AdmisinAddFunction("userqueries/", formDataToSend);

    // Create an object with the contact information
    const contactObj = {
      name,
      email,
      contactNo,
      message,
    };

    // Do something with the contactObj (e.g., send it to a server)
    console.log(contactObj);

    // Reset form fields if needed
    setName('');
    setEmail('');
    setContactNo('');
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div className="clgimgforcontact">   <img src="https://pbs.twimg.com/media/D1YY5gaWoAIytFQ?format=webp&name=small" alt="" /></div>

                  <div class="app-contact">CONTACT INFO : +(91) 9098268690</div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="CONTACT NO"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </div>
                    <div class="app-form-group message">
                      <input
                        class="app-form-control"
                        placeholder="MESSAGE"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">CANCEL</button>
                      <button type="submit" class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
