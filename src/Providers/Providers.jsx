import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext= createContext(null)
const auth = getAuth(app);


const Providers = ({children}) => {
    const [user, setUser]= useState(null)

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout= ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log("The available user is: ",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])
    const authInfo= {
        user,
        login,
        logout,
        createUser
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;

Providers.propTypes= {
    children: PropTypes.node
}