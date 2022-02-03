import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './auth.context';
import { db } from '../firebase';
import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const SavedContext = createContext();

export const SavedContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubcribe = onSnapshot(
        query(collection(db, "users", user.id, "domains")),
        (snapshot) => setSaved(snapshot.docs.map(doc => doc.data()))
      );
  
      return () => {
        unsubcribe();
      };
    }
  }, [db, user]);

  const addToSaved = async (domain) => {
    const info = {
      name: domain
    }

    const docRef = doc(db, "users", user.id, "domains", domain);
    setDoc(docRef, info);
    toast("Added to saved list", { theme: "colored", type: "success" })
  }

  return (
    <SavedContext.Provider
      value={{
        saved,
        addToSaved
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}
