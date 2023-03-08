export type appContextType = {
  // auth
  loggedUser: any
  login: (creds: any) => Promise<void>
  logout: (creds: any) => Promise<void>
  signup: (creds: any) => Promise<void>
  // post
  savePost: (post: any) => Promise<void>
  loadPosts: () => Promise<void>
  posts: any[]
}
