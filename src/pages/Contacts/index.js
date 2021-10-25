import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}) {

    return (

        <View>
            <Text>John Kevin</Text>
            <Text onPress={() => navigation.navigate('Information')}> Informações </Text>
        </View>


    );
}