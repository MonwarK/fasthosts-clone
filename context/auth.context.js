import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();  

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if(user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        setUser({
          id: user.uid,
          ...docSnap.data()
        })
      }
    })
  }, []);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u)
      })
  }

  const register = (name, email, password) => {
    if (!name || !email || !password) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const u = {
          name,
          email: user.email
        };

        setUser(u);
        setDoc(doc(db, "users", user.uid), u);
      })
      .catch(e => console.log(e))
  }

  const logOut = () => {
    setUser(null);
    signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        register,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}