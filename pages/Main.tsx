import { View, Text } from 'react-native'
import React from 'react'

import { Feed } from './Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Header } from '../cmps/Header'
import { Profile } from './Profile'

const Tab = createBottomTabNavigator()

export const Main = () => {
  return (
    <>
      <Header />
      <Tab.Navigator initialRouteName={'Feed'}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  )
}
