import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { AddPost } from '../cmps/AddPost'
import { AddPostModal } from '../cmps/AddPostModal'
import { PostPreview } from '../cmps/PostPreview'
import { appContext } from '../store/appContext'
import Post from '../interfaces/Post'

export const Feed = () => {
  const [isModalShown, setisModalShown] = useState(false)

  const appContect = useContext(appContext)
  useEffect(() => {
    appContect?.loadPosts()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <AddPost setisModalShown={setisModalShown} />

        <View>
          <FlatList
            data={appContect?.posts}
            renderItem={({ item }: { item: Post }) => (
              <PostPreview post={item} />
            )}
            keyExtractor={(post: Post) =>
              post._id || new Date().getTime().toString()
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
        {isModalShown && <AddPostModal setisModalShown={setisModalShown} />}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f2ef',
    minHeight: '100%',
  },
})
