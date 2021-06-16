import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home({ navigation }) {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
        // onScroll={(e) => {
        //   scrollY.setValue(e.nativeEvent.contentOffset.y);
        // }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
