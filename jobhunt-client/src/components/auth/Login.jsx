import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import UserDetails from './UserDetails';
//import { auth } from '../../firebase/firebase.config';
const Login = (props) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const auth = getAuth(app);

    const handleLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCreds) => {
                console.log(userCreds);
                <UserDetails/>
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code);
            });
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input type="email" id="email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input type="password" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />

                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>
                            <Link to="/sign-up" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</Link>

                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
                        </button>

                        <span className="flex items-center my-2"> {/* Add a span container */}
                            <p className="text-white"> <strong> Sign In with:</strong> </p>
                            <mat-icon _ngcontent-ng-c618043916="" role="img" className="mat-icon notranslate mat-icon-no-color hover:cursor-pointer ng-star-inserted" onClick={handleLogin} aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="auth_service_google_24dp" data-mat-icon-namespace="firebase">
                                <svg height="10%" viewBox="0 0 20 20" width="10%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path>
                                    <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path>
                                    <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path>
                                    <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path>
                                </svg>
                            </mat-icon>
                        </span>
                    </form>
                </div>
            </div>

        </>
    )
};
export default Login;
