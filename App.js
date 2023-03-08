import React from 'react'
import { BottomTabsNavigator } from './src/navigations/BottomTabsNavigator'
import {NavigationContainer} from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

