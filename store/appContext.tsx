import * as React from 'react'
import { appContextType } from '../interfaces/appContext'
import { userService } from '../services/user/userService'

export const appContext = React.createContext<appContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [loggedUser, setLoggedUser] = React.useState<any>(null)

  const login = async (creds: any) => {
    try {
      const user = await userService.login(creds)
      setLoggedUser(user)
    } catch (err) {
      console.log(err)
      throw err
    }
  }
  const signup = async (creds: any) => {
    try {
      const user = await userService.signup(creds)
      setLoggedUser(user)
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  const logout = async () => {
    try {
      await userService.logout()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <appContext.Provider value={{ loggedUser, login, logout, signup }}>
      {children}
    </appContext.Provider>
  )
}
