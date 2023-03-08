import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { HiPhotograph } from 'react-icons/hi'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCalendarFill } from 'react-icons/bs'
import { HiNewspaper } from 'react-icons/hi'

type Props = {
  setisModalShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddPost = ({ setisModalShown }: Props) => {
  return (
    <View style={styles.container} onTouchEnd={() => setisModalShown(true)}>
      <View style={styles['add-post']}>
        <Image
          source={{
            uri: 'http://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg',
          }}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.startPost}>Start a post</Text>
      </View>
      <View style={styles['logo-container']}>
        <HiPhotograph style={styles.photo} />
        <BsFillCameraVideoFill style={styles.video} />
        <BsFillCalendarFill style={styles.calendar} />
        <HiNewspaper style={styles.newspeaper} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    margin: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 25,
  },
  'logo-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  startPost: {
    width: '90%',
    marginLeft: 10,
    borderRadius: 25,
    borderWidth: 1,
    padding: 10,
  },
  ['add-post']: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    borderRadius: 50,
    width: 40,
    height: 40,
    color: '#666',
  },
  photo: {
    width: 40,
    height: 40,
    color: '#378fe9',
  },
  video: {
    width: 40,
    height: 40,
    color: '#5f9b41',
  },
  calendar: {
    width: 40,
    height: 40,
    color: '#c37d16',
  },
  newspeaper: {
    width: 40,
    height: 40,
    color: '#e16745',
  },
})
