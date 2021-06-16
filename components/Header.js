import React from "react";
import { Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
export default function Header() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const mycolor = colors.iconColor;
  return (
    <View
      style={{
        height: 45,
        marginTop: Constant.statusBarHeight,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <Entypo
          style={{ marginLeft: 20, marginTop: 7 }}
          name="youtube"
          size={28}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginTop: 3,
            marginLeft: 5,
            fontWeight: "bold",
            color: mycolor,
          }}
        >
          Youtube
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons
          name="md-search"
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  );
}
