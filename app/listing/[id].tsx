import { View, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function ListingDetails () {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>listing {id}</Text>
        </View>
    )

}