import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import login from '../../assets/login.jpg';
import Button from '../Components/Button';

export default function Login({navigation}) {
  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Image source={login} style={{ width: 400, height: 300 }}/>
      <Text className="text-blue-500 underline font-bold text-lg text-center my-10 ">Never forget your notes</Text>

      <View>
        <TextInput placeholder='Email Address' className="h-12 border-b w-[350] mx-auto border-gray-300  "/>
        <TextInput placeholder='Password' className="h-12 border-b w-[350] mx-auto border-gray-300  " secureTextEntry={true}/>
        
        
      </View>

      <View className="flex-1 justify-end items-center">
      <Button title={"Login"}  customStyles={"bg-yellow-300 border-yellow-400"} />
        <Pressable className="my-5" onPress={()=>{navigation.navigate('Register')}}>
          <Text >Don't have any account ? {' '}<Text className="mx-3 text-green-600 font-bold ">Sign up</Text> </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}