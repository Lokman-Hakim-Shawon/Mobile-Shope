
import {   GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase.config';
import { createContext, useEffect, useState } from 'react';
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
export  const AuthContext=createContext(null)
const Authprovider = ({children}) => {
       const [user,setuser]=useState(null)
       const [loading,setloading]=useState(true)
       useEffect(()=>{
        const statechange=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
            setloading(false)
        })
        return ()=>{
            statechange()
        }
       },[])
     const createuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
       }
       const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
       }
       const loginwithgoogle=()=>{
        setloading(true)
        return signInWithPopup(auth,provider)
       }
       const logOut=()=>{
        setloading(true)
        return signOut(auth)
       }
    const authInfo={
       user,
       loading,
       auth,
       createuser,
       login,
       loginwithgoogle,
       logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default Authprovider;