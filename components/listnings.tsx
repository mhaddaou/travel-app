import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ListningType } from "@/Types/listningType";

type Props = {
  DATA: ListningType[];
};

type renderType = {
  item: ListningType;
};

const Listnings = ({ DATA }: Props) => {
  const renderItem = ({ item }: renderType) => {
    return (
      <TouchableOpacity>
        <View className=" bg-white p-3 rounded-lg mr-4" >
          <Image className="rounded-lg" source={{ uri: item.image }} width={200} height={200} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mt-6">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listnings;
