import React, {useState,useEffect} from 'react'
import {auth} from '../firebase'

export const AuthContext = React.createContext();

function AuthProvider({children}) {
    const[currentUser,setCurrentUser] = useState();
    const[loading,setloading] = useState(true);
    function signup(email,password){
         return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(()=>{
        //checking if any user logged in or not when we re-open instagram
       const unsubscribe = auth.onAuthStateChanged(user=>{
           setCurrentUser(user);
           setloading(false);
       }) 
       return()=>{
           unsubscribe();
       }
    },[])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
