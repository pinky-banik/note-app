import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import login from '../../assets/register.jpg';
import Button from '../Components/Button';

const genderOptions =['Male','Female'];

export default function Register({navigation}) {
  const [gender,setGender] = useState(null);

   const selected = true;
  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      {/* <Image source={login} style={{ width: 400, height: 300 }}/> */}
      {/* <Text className="text-blue-500 underline font-bold text-lg text-center mb-5 ">Never forget your notes</Text> */}

      <View>
        
        <TextInput placeholder='Email Address' className="h-12 border-b w-[350] mx-auto border-gray-300  "/>
        <TextInput placeholder='Password' className="h-12 border-b w-[350] mx-auto border-gray-300  " secureTextEntry={true}/>
        <TextInput placeholder='Full Name' className="h-12 border-b w-[350] mx-auto border-gray-300  "/>
        <TextInput placeholder='Age' className="h-12 border-b w-[350] mx-auto border-gray-300  "/>
        
        <View className="py-5">
        {
          genderOptions.map((option,index)=>{
            const selected = (option === gender);
            return(
              <Pressable onPress={()=>setGender(option)} key={index} className="flex-row flex items-center p-1" >
          <View style={{width:20,height:20}} className={selected? " rounded-full border border-blue-600 mx-1 flex justify-center items-center " : "rounded-full border border-gray-600 mx-1 flex justify-center items-center"}>
            <View style={{width:15,height:15}} className={selected? "bg-blue-500 rounded-full ":""}></View>
          </View>
          <Text>{option}</Text>
        </Pressable>
            )
          })
        }
        </View>
      </View>

      <View className="flex-1 justify-end items-center">
      <Button title={"Sign up"}  customStyles={"bg-blue-300 border-blue-400"} />
        <Pressable className="my-5" onPress={()=>{navigation.navigate('Login')}}>
          <Text >Already have any account ? {' '}<Text className="mx-3 text-green-600 font-bold ">Sign in</Text> </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}