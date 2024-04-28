import { React, useState, useContext } from 'react'
import { auth } from '../../firebase/firebase.config';

const UserDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
       const listen = auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => listen();
    }, []);

    const handleSignOut = () => {
        auth.signOut().then(() => {
            console.log("signed out sccessfully");
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <>
            {authUser ? <> <h1>Welcome {authUser.email}</h1> <button onClick={handleSignOut}>Sign out</button></> : <h1>Please login</h1>}
        </>
    )
};

export default UserDetails
