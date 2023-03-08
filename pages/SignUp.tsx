import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { appContext } from '../store/appContext'

export const SignUp = (props: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setfullname] = useState('')

  const appContect = useContext(appContext)

  const signup = async () => {
    try {
      await appContect?.signup({ username, password, fullname })

      setUsername('')
      setPassword('')
      setfullname('')
      props.navigation.navigate('Main', { screen: 'Feed' })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>T</Text>
      <Text style={styles.title}>Welcome to your traveler's community</Text>
      <TextInput
        placeholder="Enter your full name"
        editable
        multiline
        onChangeText={setfullname}
        value={fullname}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your user-name"
        editable
        multiline
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your password"
        editable
        multiline
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <Text
        style={styles['sign-up']}
        onPress={() => props.navigation.navigate('SignIn')}
      >
        Or sign-in
      </Text>
      <Button onPress={signup} title="Sign up" />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 60,
    position: 'absolute',
    top: 0,
    left: 15,
    color: '#0073b1',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  ['sign-up']: {
    fontSize: 20,
    margin: 15,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
  },
})
