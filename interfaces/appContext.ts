export type appContextType = {
  loggedUser: any
  login: (creds: any) => void
  logout: (creds: any) => void
  signup: (creds: any) => void
}
