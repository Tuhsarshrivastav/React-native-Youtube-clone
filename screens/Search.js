import React, { useState } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import Constant from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const miniCardData = useSelector((state) => {
    return state;
  });
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyB2QI43TrRXyetZqE9-OqJQLA17FgHJ-fo
    `)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
      });
  };
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />

        <Ionicons name="md-send" size={32} onPress={() => fetchData()} />
      </View>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 300 }}
          size="large"
          color="red"
        />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};
export default Search;
