import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'

export const Header = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View
        style={styles['logo-container']}
        onTouchEnd={() => navigation.navigate('Main', { screen: 'Feed' })}
      >
        <AiFillHome style={styles.logo} />
        <Text>Home</Text>
      </View>

      <View
        style={styles['logo-container']}
        onTouchEnd={() => navigation.navigate('Main', { screen: 'MyNetwork' })}
      >
        <FaUserFriends style={styles.logo} />
        <Text style={styles.text}>My Network</Text>
      </View>

      <View
        style={styles['logo-container']}
        onTouchEnd={() => navigation.navigate('Main', { screen: 'Profile' })}
      >
        <Image
          source={{
            uri: 'http://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg',
          }}
          resizeMode="contain"
          style={styles.img}
        />
        <Text>Me</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: '#00000014',
    borderBottomWidth: 1,
  },
  'logo-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  text: {
    textAlign: 'center',
    color: '#666',
  },
  logo: {
    width: 40,
    height: 40,
    color: '#666',
  },
  img: {
    borderRadius: 50,
    width: 40,
    height: 40,
    color: '#666',
  },
})
