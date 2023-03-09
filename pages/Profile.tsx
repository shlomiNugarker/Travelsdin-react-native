import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { appContext } from '../store/appContext'

import { PostPreview } from '../cmps/PostPreview'

export const Profile = () => {
  const appContect = useContext(appContext)

  const myPosts = appContect?.posts.filter(
    (p) => p.userId === appContect?.loggedUser?._id
  )
  return (
    <ScrollView>
      <View>
        <View>
          <FlatList
            data={myPosts}
            renderItem={({ item }) => <PostPreview post={item} />}
            keyExtractor={(post) => post._id || new Date().getTime().toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  )
}
