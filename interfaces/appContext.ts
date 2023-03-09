import { Creds } from './Creds'
import Post from './Post'
import User from './User'

export type appContextType = {
  // auth
  loggedUser: User | null
  login: (creds: Creds) => Promise<void>
  logout: (creds: Creds) => Promise<void>
  signup: (creds: Creds) => Promise<void>
  // post
  savePost: (post: Post) => Promise<void>
  loadPosts: () => Promise<void>
  posts: Post[]
}
