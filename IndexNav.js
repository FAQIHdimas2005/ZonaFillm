import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import React from 'react'
import { Splash ,Homescreen,Register,Login} from '../src/screen'

const Mazda = createNativeStackNavigator()
const IndexNav = () => {
  return (
   <NavigationContainer>
    <Mazda.Navigator>
        <Mazda.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Mazda.Screen name='Register' component={Register} options={{headerShown:false}}/>
        <Mazda.Screen name='Homescreen' component={Homescreen} options={{headerShown:false}}/>
        <Mazda.Screen name='Login' component={Login} options={{headerShown:false}}/>
    </Mazda.Navigator>
   </NavigationContainer>
  )
}

export default IndexNav

const styles = StyleSheet.create({})