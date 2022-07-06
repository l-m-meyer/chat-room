import { useState, createContext } from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const user = await loginWithGoogle();

    // login failed
    if (!user) {
      // TODO: Handle failed login
    }
    // successful login
    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthContext, AuthProvider };