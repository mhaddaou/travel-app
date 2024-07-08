import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ListningType } from "@/Types/listningType";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constans/Colors";
import {Link } from 'expo-router';
import { useEffect, useState } from "react";
type Props = {
  DATA: ListningType[];
  category : string;
};

type renderType = {
  item: ListningType;
};


const filtringData = () => {
  
}

const Listnings = ({ DATA, category }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 300)

  },[category])



  const renderItem = ({ item }: renderType) => {
    return (
      <Link key={item.id} href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View className=" bg-white p-3 rounded-lg mr-4">
          <Image
            className="rounded-lg"
            source={{ uri: item.image }}
            width={200}
            height={200}
          />
          <View className="w-full  relative">
            <View className="absolute right-5 -top-5">
            <View className="bg-orange-500 p-2 rounded-full border-[2px] border-white">
              <Ionicons  name={"bookmarks"} size={18} color={Colors.white} />
            </View>           

            </View>

          </View>
          <View className="pt-6">
            <Text className="text-sm text-gray-700  font-bold tracking-wide">{item.name}</Text>
            <View className="flex flex-row  justify-between items-center pt-3">
              <View className="flex flex-row items-center">
            <Ionicons size={18} color={Colors.primaryColor} name="location" />
            <Text className="font-semibold tracking-wide text-xs text-gray-500">{item.location}</Text>

              </View>
              <View>
                <Text className="text-orange-500 font-medium text-xs">${item.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View className="mt-6">
      <FlatList
        data={loading ? [] : DATA}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listnings;
