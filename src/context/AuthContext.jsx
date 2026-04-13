import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { users } from '../data/users'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null)

  function login(email, password) {
    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    )

    if (!foundUser) {
      return false
    }

    setUser(foundUser)
    return true
  }

  function logout() {
    setUser(null)
  }

  const isAuthenticated = Boolean(user)

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}