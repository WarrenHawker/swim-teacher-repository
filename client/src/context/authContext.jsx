import { useEffect } from "react";
import { useContext, createContext, useReducer } from "react";

const authContext = createContext({});

export const useAuth = () => useContext(authContext);

export const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload };
      case "LOGOUT":
        return { user: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    if (userStorage) {
      dispatch({ type: "LOGIN", payload: userStorage });
    }
  }, []);

  console.log(state);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
