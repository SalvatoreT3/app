import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CollectionNavigator from '../navigators/CollectionNavigator'
import UserProfileScreen from '../screens/UserProfileScreen'
import { Ionicons } from '@expo/vector-icons';


const MainStack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (

    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardScreen}  options={{
          tabBarLabel: '',
          tabBarColor: '#F7B40A',
          tabBarIcon: ({ color }) => (
           
            <Ionicons name="ios-home-outline" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen name="CollectionNavigator" component={CollectionNavigator} options={{
          tabBarLabel: '',
          tabBarColor: '#F7B40A',
          tabBarIcon: ({ color }) => (
           
            <Ionicons name="md-menu-sharp"  size={24} color={color} />
          ),
        }}
      />
        <Tab.Screen name="UserProfileScreen" component={UserProfileScreen}  options={{
          tabBarLabel: '',
          tabBarColor: '#F7B40A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      </Tab.Navigator>
   

  )
}