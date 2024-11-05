import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';


export default function HomeNavigator() {

    const Stack = createStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen name='home' component={HomeScreen} options={{
        headerStyle:{backgroundColor:"#5c3ebc"},
        headerTitleAlign:'center',
        headerTitle:()=>(
            <View>
                <Image
                resizeMode='contain'
                className='w-16 h-8'
                source={require("../../../assets/logo.png")}
                />
            </View>
        )
    }}/>
   </Stack.Navigator>
  )
}