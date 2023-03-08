import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import { AiOutlineClose } from 'react-icons/ai'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../store/appContext'

const initPost = {
  body: '',
  imgBodyUrl: null,
  videoBodyUrl: null,
  link: '',
  title: '',
  style: {
    textAlign: 'ltr',
  },
}

type Props = {
  setisModalShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddPostModal = ({ setisModalShown }: Props) => {
  const appContect = useContext(appContext)
  const [newPost, setNewPost] = useState<{
    body: string
    imgBodyUrl: null
    videoBodyUrl: null
    link: string
    title: string
    style: {
      textAlign: string
    }
  }>(initPost)

  const onAdd = async () => {
    try {
      await appContect?.savePost(newPost)
      onCancel()
    } catch (err) {
      console.log(err)
    }
  }

  const onCancel = () => {
    setNewPost(initPost)
    setisModalShown(false)
  }

  useEffect(() => {
    return () => {
      setNewPost(initPost)
    }
  }, [])
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 24 }}>Create a Post</Text>
          <AiOutlineClose onTouchEnd={onCancel} />
        </View>
        <View style={styles['input-container']}>
          <TextInput
            placeholder="What do you want to talk about?"
            editable
            multiline
            numberOfLines={5}
            onChangeText={(text) =>
              setNewPost((prev) => ({ ...prev, body: text }))
            }
            value={newPost.body}
            secureTextEntry={true}
            textContentType="password"
            style={styles.input}
          />
          <View style={styles.btns}>
            <Button onPress={onAdd} title="Add" />
            <Button onPress={onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#00000040',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
  'input-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    maxHeight: '50%',
    width: '90%',
    top: '15%',
    borderRadius: 25,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    borderColor: '#00000014',
  },
  input: {
    width: '90%',
    // borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '50%',
  },
})
