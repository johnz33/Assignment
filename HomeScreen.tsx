import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import { Pressable, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/dataActions";

const HomeScreen = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [data, setData] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log(data, "data");
    // dispatch(fetchData())
  }, []);
  return (
    <View>
      <Header />
      <View style={styles.homescreensearch}>
        <TextInput placeholder="Search..." style={styles.homescreeninput} />
        <Pressable>
          <AntDesign
            name="search1"
            size={34}
            style={{ marginLeft: 35 }}
            color="black"
          />
        </Pressable>
      </View>
      {data?.map((value: any) => {
        console.log(value?.image);
        return (
          <View>
            <Image
              source={{ uri: value?.image }}
              style={{ height: 50, width: 50 }}
            />
            <Text>{value.category}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreeninput: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "grey",
  },
  homescreensearch: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
  },
});
