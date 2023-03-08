import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddPost } from '../cmps/AddPost'
import { AddPostModal } from '../cmps/AddPostModal'

export const Feed = () => {
  const [isModalShown, setisModalShown] = useState(false)
  return (
    <View style={styles.container}>
      <AddPost setisModalShown={setisModalShown} />
      <Text>Feed</Text>
      {isModalShown && <AddPostModal setisModalShown={setisModalShown} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f2ef',
    minHeight: '100%',
  },
})
