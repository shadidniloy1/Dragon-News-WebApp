// import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react"

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   console.log(user);

//   const createNewUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const authInfo = {
//     user,
//     setUser,
//     createNewUser,
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     })
//     return () => {
//       unsubscribe();
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const CreateNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    user,
    setUser,
    CreateNewUser
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider