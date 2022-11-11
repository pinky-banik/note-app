import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Button({title,onPress, customStyles}) {
  return (
    <Pressable className={`${customStyles} + w-[150] mx-auto my-5 rounded-full border-2 align-middle`} onPress={onPress}>
      <Text className="text-center text-lg font-bold p-2 ">{title}
    </Text>
    </Pressable>
  )
}