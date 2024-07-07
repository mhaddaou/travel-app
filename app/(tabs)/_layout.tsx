import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constans/Colors'

export default class Layout extends Component {
  render() {
    return (
      <Tabs screenOptions={{
        tabBarStyle:{
            backgroundColor : Colors.bgColor,
            borderTopWidth : 0,
            padding: 0
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999"
      }}>
        <Tabs.Screen name='index'  
        options={{
            tabBarIcon: ({color}) =>(
                <Ionicons name='compass' size={28} color={color} />
            )
        }}
        />
        <Tabs.Screen name='category' options={{
            tabBarIcon:({color}) =>(
                <MaterialIcons name='space-dashboard' size={28} color={color} />
            )
        }} />
        <Tabs.Screen name='search'
        options={{
            tabBarIcon: ({color}) =>(
                <View className="bg-orange-500 shadow-md shadow-black/70" style={{
                    // backgroundColor : Colors.primaryColor,
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    height:50   ,
                    borderRadius: 10
                }}>
                    <Ionicons className=''  name='search-outline' size={24} color={Colors.white} />
                </View>
            )
        }} 
        />
        <Tabs.Screen name='bookMark' 
        options={{
            tabBarIcon: ({color}) =>(
                <Ionicons name='bookmark' size={28} color={color} />
            )
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            tabBarIcon: ({color}) =>(
                <FontAwesome name='user' size={28} color={color} />
            )
        }} 
        />
      </Tabs>
    )
  }
}