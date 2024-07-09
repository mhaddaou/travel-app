import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import Colors from "@/constans/Colors";
import data from "@/data/destinations.json";
import { useEffect, useState } from "react";
import { ListningType } from "@/Types/listningType";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import { transform } from "@babel/core";



export default function ListingDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter()
  const [DATA, setData] = useState<ListningType>({} as any);
  const scroolRef  = useAnimatedRef <Animated.ScrollView>();
  const scroolOfsset = useScrollViewOffset(scroolRef);
  const animationImageStyle = useAnimatedStyle( () =>{
    return {
      transform  :[
        {
          translateY: interpolate(scroolOfsset.value, [-300, 0, 300], [-300/2, 0, 300*0.75]),
        }
      ]
    }
  })
  useEffect(() => {
    if (id) setData(data[+id - 1]);
  }, [id]);
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity className=" rounded-md py-1 px-1.5 bg-white/50" onPress={() => router.back()}>
              <View className="bg-white p-1.5 rounded-md">
                <Feather className="" name="arrow-left" size={20} color={Colors.black} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity className=" rounded-md py-1 px-1.5 bg-white/50" onPress={() => router.back()}>
              <View className="bg-white p-1.5 rounded-md">
                <Ionicons className="" name="bookmark-outline" size={20} color={Colors.black} />
              </View>
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerTitle: "",
        }}
      />
     
      <Animated.ScrollView ref={scroolRef} className="flex-1" style={{ backgroundColor: Colors.bgColor }}>
        <Image  source={{ uri: DATA.image }} className="w-full" height={320} />
        <View className="pt-5 w-[90%] mx-auto">
          <View>
            <Text className="text-2xl font-semibold  tracking-wider pb-2">
              {DATA.name}
            </Text>
            <View className="flex flex-row  items-center gap-1">
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text className="text-sm font-semibold text-gray-600 ">
                {DATA.location}
              </Text>
            </View>
            <View className="flex flex-row justify-between pt-5">
              <View className="flex flex-row gap-2  items-center">
                <View className="h-fit w-fit">
                  <View className="p-[6px] bg-gray-200 rounded-md shadow-sm shadow-black/30">
                    <Ionicons
                      className=""
                      name="time"
                      size={19}
                      color={Colors.primaryColor}
                    />
                  </View>
                </View>
                <View className="">
                  <Text className="text-sm  font-bold  text-gray-400">
                    Duration
                  </Text>
                  <Text className="text-sm -mt-1 text-gray-600 font-bold">
                    {DATA.duration} Days
                  </Text>
                </View>
              </View>
              <View className="flex flex-row gap-2  items-center">
                <View className="h-fit w-fit">
                  <View className="p-[6px] bg-gray-200 rounded-md shadow-sm shadow-black/30">
                    <FontAwesome5
                      className=""
                      name="users"
                      size={18}
                      color={Colors.primaryColor}
                    />
                  </View>
                </View>
                <View className="">
                  <Text className="text-sm  font-bold  text-gray-400">
                    Persone
                  </Text>
                  <Text className="text-sm -mt-1 text-gray-600 font-bold">
                    {DATA.duration}
                  </Text>
                </View>
              </View>
              <View className="flex flex-row gap-2  items-center">
                <View className="h-fit w-fit">
                  <View className="p-[6px] bg-gray-200 rounded-md shadow-sm shadow-black/30">
                    <Ionicons
                      className=""
                      name="star"
                      size={18}
                      color={Colors.primaryColor}
                    />
                  </View>
                </View>
                <View className="">
                  <Text className="text-sm  font-bold  text-gray-400">
                    Rating
                  </Text>
                  <Text className="text-sm -mt-1 text-gray-600 font-bold">
                    {DATA.rating}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="pt-5 ">
            <Text className="text-base font-medium tracking-wide  " style={{color: Colors.black}}>
              {DATA.description}
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
        <View className=" flex flex-row justify-between items-end pb-10 w-[90%] mx-auto ">
          <Pressable className="bg-orange-500 flex-1 px-6 py-4 rounded-lg">
            <Text className="text-white text-center font-bold text-base">
              BOOK NOW
            </Text>
          </Pressable>
          <View className="bg-[#181b26] ml-5 px-6 py-4 rounded-lg">
            <Text className="text-white text-base font-bold">
              ${DATA.price}
            </Text>
          </View>
        </View>
    </>
  );
}
