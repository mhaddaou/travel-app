
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import Colors from "@/constans/Colors";
import CategoriesBotton from "@/components/CategoriesButton";
import { useState } from "react";
import Listnings from "@/components/listnings";
import data from "@/data/destinations.json"
import Groups from "@/components/groups";


export default function Home(){
    const headerHeight = useHeaderHeight() + 10;
    const [category, setCategory] = useState('All');

    const onCatChanged = (cat : string) =>{
        console.log(cat);
        setCategory(cat);
    } 

    return (
        <>
        <Stack.Screen options={{
            headerTitle: "",
            
            headerTransparent: true,
            headerLeft: () =>(
                <TouchableOpacity className="w-10 h-10 ml-5 shadow-md shadow-black">
                    <Image className="w-full h-full rounded-lg" source={{
                        uri: "https://xsgames.co/randomusers/avatar.php?g=male"
                    }}/>
                </TouchableOpacity>
            ),
            headerRight: () =>(
                <TouchableOpacity className="mr-5 bg-white p-2 rounded-lg shadow-md shadow-black">
                    <Ionicons name="notifications" size={20} color={Colors.black}/>
                </TouchableOpacity>
            )
        }} />
        <View className="" style={{paddingTop: headerHeight, paddingHorizontal:20, backgroundColor: Colors.bgColor}}>
            <Text className="text-2xl leading-10 font-bold capitalize text-center italic">explor the beutifull World </Text>
            <View className="w-full flex flex-row  pt-3 ">
                <View className=" flex flex-row bg-white px-4 flex-1 mr-4  rounded-lg items-center">
                    <Ionicons  name="search" size={24} color={'gray'}/>
                    <TextInput className="ml-2 flex-1" placeholder="Search..." autoCorrect={false} />

                </View>
                <TouchableOpacity className=" p-2 rounded-md" style={{backgroundColor: Colors.primaryColor}}>
                    <Ionicons name="options" size={24} color={Colors.white} />
                </TouchableOpacity>
            </View>
            <CategoriesBotton onCategoryChanged={onCatChanged}/>
            <Listnings DATA={data} category={category}/>
            <Groups/>
            
        </View>


        </>
    )
}

// exp://jn6uvq0-anonymous-8081.exp.direct