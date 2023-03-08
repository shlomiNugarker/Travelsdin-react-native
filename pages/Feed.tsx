import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { AddPost } from '../cmps/AddPost'
import { AddPostModal } from '../cmps/AddPostModal'
import { PostPreview } from '../cmps/PostPreview'
import { appContext } from '../store/appContext'

export const Feed = () => {
  const appContect = useContext(appContext)
  const [isModalShown, setisModalShown] = useState(false)

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
            renderItem={({ item }: any) => <PostPreview post={item} />}
            keyExtractor={(post: any) => post._id}
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
