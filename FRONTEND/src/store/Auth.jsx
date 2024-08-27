import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const API = import.meta.env.VITE_APP_URI_API;
  const authorizationToken= `Bearer ${token}`

  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        console.log("Fetched User Data:", userData); // Check structure
        setUser(userData); // Ensure this is the expected structure
      } else {
        console.error("Failed to fetch user data", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, storeTokenInLS, LogoutUser, user, authorizationToken, isLoading , API}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
