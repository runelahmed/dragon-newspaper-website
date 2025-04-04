import { createContext, useEffect, useState } from "react"
import { auth } from "../../firebase.config.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    console.log(user);


    // Create New User
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login user
    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);


    }

    // LogOut user
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Updated profile
    const updatedUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }



    //Observer 
    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
      createNewUser,
      signinUser,
      logOutUser,
      updatedUserProfile,
      user,
      setUser,
      loading,
      setLoading,
    };

  return (
      <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider