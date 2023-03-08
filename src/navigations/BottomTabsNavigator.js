import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InicioScreen } from '../screens/InicioScreen';
import { ComplementoScreen } from '../screens/ComplementoScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={
            ({route}) => ({
                tabBarIcon: ()  => {
                    let myIcon='';
                    switch (route.name) {
                        case 'InicioScreen':
                            myIcon: 'alarm-outline';
                        break;
                        case 'ComplementoScreen':
                            myIcon: 'alarm-outline';
                        break;
                    
                        default:
                        break;
                    }
                    return <Icon name={myIcon} size={30} color='black' />
                }
            })
        }
    >
        <Tab.Screen name='InicioScreen'   component={InicioScreen} />
        <Tab.Screen name='ComplementoScreen' component={ComplementoScreen} />
    </Tab.Navigator>
  )
}
