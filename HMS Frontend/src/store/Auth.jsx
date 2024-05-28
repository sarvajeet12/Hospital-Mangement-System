import { createContext, useContext, useEffect, useState } from "react";

//? creating contextAPI
export const AuthContext = createContext();

//* provider component to wrap the entire app
export const AuthProvider = ({ children }) => {
  // store token
  const [token, setToken] = useState(localStorage.getItem("tokenHMS"));

  // store data of user who loggedIn
  const [user, setUser] = useState("");

  // to get authorize
  const authorizationToken = `Bearer ${token}`;
  // console.log(authorizationToken);

  // keep loading until data is found
  const [isLoading, setIsLoading] = useState(true);

  // definition of storeTokenINLS
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); // this is the problem and solution : L-37

    localStorage.setItem("tokenHMS", serverToken);
    return;
  };

  //? tackling the logout functionality
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("tokenHMS");
    return;
  };

  //   token present in LS or not
  // and other words user log in or not
  let isLoggedIn = !!token;

  // ? ------------------------------------------- JWT Authentication - to get the currently loggedIn user data -----------------------------------------------
  const userAuthentication = async () => {
    try {
      setIsLoading(true); // Keep loading, data not received (log in user data)
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.userData);

        setIsLoading(false); // stop loading, data received
      } else {
        setUser(null);
        // show error msg , so setIsLoading stop
        setIsLoading(false); // stop loading, data received
      }
    } catch (error) {
      console.log("userAuthentication Error: ", error);
    }
  };

  // automatically run this function
  useEffect(() => {
    userAuthentication();
  }, [token]);

  // ? ---------------------------------------------------------------------- End : JWT Authentication -------------------------------------------------
  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        authorizationToken,
        logoutUser,
        isLoggedIn,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth function (Consumer)
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
};

//?useAuth Function now contains the value provided by the AuthContext.Provider higher up in the component tree.
