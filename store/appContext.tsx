import * as React from 'react'
import { appContextType } from '../interfaces/appContext'
import { userService } from '../services/user/userService'
import { postService } from '../services/posts/postService'
import { useState } from 'react'

export const appContext = React.createContext<appContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  // **********
  // auth
  const [loggedUser, setLoggedUser] = React.useState<any>(null)
  const login = async (creds: any): Promise<void> => {
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

  // **********
  // post
  const [posts, setPosts] = useState<any[]>([])

  const loadPosts = async () => {
    const posts = await postService.query()
    setPosts(posts)
  }

  const savePost = async (post: any) => {
    try {
      const postToAdd = {
        ...post,
        userId: loggedUser._id,
        fullname: loggedUser.fullname,
      }
      const addedPost = await postService.save(postToAdd)

      if (post._id) {
        setPosts((posts) =>
          posts.filter((p) => (p._id === addedPost._id ? addedPost : p))
        )
      } else {
        const updatedPosts = [addedPost, ...posts]
        setPosts(updatedPosts)
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <appContext.Provider
      value={{ loggedUser, login, logout, signup, savePost, posts, loadPosts }}
    >
      {children}
    </appContext.Provider>
  )
}
