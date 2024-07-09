import { FlatList, Image, Text, View } from "react-native"

import { groupsType } from "@/Types/groupsType";
import groups from '@/data/groups.json'
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constans/Colors";

const Groups = () =>{
    const [data, setData] = useState<groupsType[]>(groups)
    const rendring = ({item} : {item : groupsType}) =>{
        return (
            <View className="p-2 bg-white mr-3 flex flex-row items-center rounded-md">
                <Image className="rounded-md " source={{uri: item.image}} style={{width: 80, height: 85}}/>
                <View className="space-y-1 ml-2">
                    <Text className="text-sm font-medium tracking-wide">{item.name}</Text>
                    <View className="flex flex-row items-center space-x-2">
                    <Ionicons  name="star" color={Colors.primaryColor} size={16} />
                    <View className="flex flex-row">
                    <Text>{item.rating}</Text>
                    
                    <Text className="text-xs text-gray-500"> ({item.reviews})</Text>
                    </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View className="pt-2 ">
            <Text className="font-bold text-xl pb-2  tracking-wider">Top travel Groups</Text>
         <FlatList data={data} renderItem={rendring} horizontal showsHorizontalScrollIndicator={false}/>

        </View>
    )
}


export default Groups;