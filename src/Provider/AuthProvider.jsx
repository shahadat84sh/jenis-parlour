import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, updateProfile, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Components/SocilaLogin/Hooks/useAxiosPublic";



export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const faceBookProvider = new FacebookAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const fbSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, faceBookProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURl:photo
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () =>{
            return unsubscribe()
        }
    },[axiosPublic])
    

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        updateUserProfile,
        googleSignIn,
        fbSignIn, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;