import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = (props) => {
  const navigate = useNavigate(); // Move useNavigate to the top level

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;
  const auth = getAuth(app);
  

  const handleSingUp = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior which keeps track of logged in user
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
          console.log(userCreds);
          navigate("/login");
      })
      .catch((error) => {
          console.log(error.code);
      });
  };
  return (
    <>
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  <form onSubmit={handleSingUp}> 
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" 
                        onChange={(e) => setCredentials({ ...credentials, fullname: e.target.value })}/>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        onChange={(e) => setCredentials({ ...credentials, confirm_password: e.target.value })}/>

                    <button
                        type="submit" 
                        className="w-full text-center py-3 rounded bg-blue text-white hover:bg-blue-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form> 

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
                
            </div>
        </div>

    </div>
    </>
  )
}

export default SignUp;
