import { View, Text, Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import login from '../../assets/login.jpg';

export default function Login() {
  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Image source={login} style={{ width: 400, height: 300, backgroundColor: "red" }}/>
      <Text className="text-pink-500">Hi</Text>
    </SafeAreaView>
  )
}