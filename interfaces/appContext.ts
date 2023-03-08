export type appContextType = {
  loggedUser: any
  login: (creds: any) => Promise<void>
  logout: (creds: any) => Promise<void>
  signup: (creds: any) => Promise<void>
}
