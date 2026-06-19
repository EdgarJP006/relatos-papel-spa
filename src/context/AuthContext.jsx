import { createContext, useState, useContext } from 'react'
import { setAuthHeader} from "../services/api.jsx";

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState( null)
  const [user, setUser] = useState(null)


  const loginGlobal = (opaqueToken,userData) => {
    setToken(opaqueToken);
    setUser(userData);
    setAuthHeader(opaqueToken);
  };

  const logoutGlobal = () => {
    setToken(null);
    setUser(null);
    setAuthHeader(null); // Limpia las cabeceras de Axios
  };

const isAuthenticated = Boolean(token)

  return (<AuthContext.Provider value={{ user, token, loginGlobal, logoutGlobal, isAuthenticated }}>
    {children})
    </AuthContext.Provider>
   )
  }

export function useAuth() {
  return useContext(AuthContext)
}