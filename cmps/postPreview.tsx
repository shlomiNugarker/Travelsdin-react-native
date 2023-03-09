import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'

import { HiDotsHorizontal } from 'react-icons/hi'
import { BsSend } from 'react-icons/bs'
import { BiLike, BiCommentDetail, BiShare } from 'react-icons/bi'
import { userService } from '../services/user/userService'
import Post from '../interfaces/Post'
import User from '../interfaces/User'

type Props = {
  post: Post
}

export const PostPreview = ({ post }: Props) => {
  const [userPost, setUserPost] = useState<User | null>(null)

  useEffect(() => {
    ;(async () => {
      // loadUserPost
      if (!post) return
      const userPost = await userService.getById(post.userId)
      setUserPost(() => userPost)
    })()
  }, [])

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles['profile-container']}>
          <Image
            source={{
              uri: 'http://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg',
            }}
            resizeMode="contain"
            style={styles.profile}
          />
          <View style={styles.name}>
            <Text>Guest</Text>
            <Text>2 hours ago</Text>
          </View>
        </View>
        <View>
          <HiDotsHorizontal />
        </View>
      </View>
      {/* BODY */}
      <View style={{ margin: 5 }}>
        <Text style={{ marginBottom: 5 }}>{post.body}</Text>
      </View>
      {post.imgBodyUrl && (
        <Image
          source={{
            uri: post.imgBodyUrl,
          }}
          resizeMode="contain"
          style={{ height: 200, marginBottom: 5 }}
        />
      )}
      {/* ACTION BTNS */}
      <View style={styles.btns}>
        <Pressable
          style={styles['btn-container']}
          onPress={() => console.log('press')}
        >
          <BiLike style={styles.logo} />
          <Text style={{ marginLeft: 5 }}>Like</Text>
        </Pressable>
        <Pressable style={styles['btn-container']}>
          <BiCommentDetail style={styles.logo} />
          <Text style={{ marginLeft: 5 }}>Comment</Text>
        </Pressable>
        <Pressable style={styles['btn-container']}>
          <BiShare style={styles.logo} />
          <Text style={{ marginLeft: 5 }}>Share</Text>
        </Pressable>
        <Pressable style={styles['btn-container']}>
          <BsSend style={styles.logo} />
          <Text style={{ marginLeft: 5, padding: 10 }}>Send</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
    width: '95%',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00000014',
  },
  header: {
    backgroundColor: 'white',
    margin: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ['profile-container']: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  name: {
    marginLeft: 10,
  },
  btns: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  logo: {
    color: '#b2b2b2',
  },
  ['btn-container']: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
