import { View, Text, Image, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import login from '../../assets/login.jpg';

export default function Login() {
  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Image source={login} style={{ width: 400, height: 300 }}/>
      <Text className="text-pink-500 font-bold text-lg text-center">Never forget your notes</Text>

      <View>
        <TextInput placeholder='Email' className="h-12 border w-96 text-center "/>
        <TextInput placeholder='Password' className="h-12 border w-96 text-center my-2"/>
        <TextInput placeholder='Confirm Password' className="h-12 border w-96 text-center "/>
      </View>
    </SafeAreaView>
  )
}