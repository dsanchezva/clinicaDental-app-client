import { createContext, useEffect, useState } from "react";
import service from "../services/config";

const AuthContext = createContext();

const AuthWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);
  

  const authenticateUser = async () => {
    try {
      const response = await service.get("/user/verify");
      setIsLoggedIn(true);
      setLoggedUser(response.data.payload);
      setIsLoading(false);
      
    } catch (err) {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const passedContext = {
    authenticateUser,
    isLoggedIn,
    loggedUser,
  };

  if (isLoading) {
    return (
      <h1>Loading ...</h1>
    );
  }
  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };