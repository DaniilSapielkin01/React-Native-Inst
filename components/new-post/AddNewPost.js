import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { arrowLeft } from "../../assets/image/default-icons";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
  </View>
);
const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
      <SvgXml xml={arrowLeft} />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <View />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    marginRight: 10,
  },
});

export default AddNewPost;
