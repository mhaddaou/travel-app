import Colors from "@/constans/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"
type Props = {
    onCategoryChanged : (category : string) => void
}

const CategoriesBotton = ({onCategoryChanged} : Props) =>{
    const [selected, setSelected] = useState(0)
    const scrollRef = useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity[]| null[]>([])

    

    const handlCategorySelected = (index : number) =>{
        const clicked = itemRef.current[index];
        setSelected(index)
        clicked?.measure((x) =>{
            scrollRef.current?.scrollTo({x: x, y: 0, animated: true})
        })
        onCategoryChanged(destinationCategories[index].title)
            
    }

    return (
        <View className="pt-5  ">
            <Text className="font-bold text-xl  tracking-wider">Categories</Text>
            <ScrollView horizontal 
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}>
                {
                    destinationCategories.map((item, index) =>{
                        return (
                            <TouchableOpacity ref={(el) => itemRef.current[index] = el} key={index} className="px-2 pt-3" onPress={() => handlCategorySelected(index)} >
                                <View  className={`flex flex-row items-center  ${selected == index ?  'bg-orange-500 ' : 'bg-white' } rounded-lg p-2`}  >
                                <MaterialCommunityIcons color={selected == index ? Colors.white : Colors.black} size={24} name={item.iconName as any} />
                                <Text className={`text-lg ml-1.5 font-medium ${selected == index?  'text-white' : 'text-black' }`}>{item.title}</Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })

                }
            </ScrollView>
        </View>
    )
}

export default CategoriesBotton;