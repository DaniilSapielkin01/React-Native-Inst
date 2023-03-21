import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header navigation={navigation} />
    <Stories />
    <ScrollView>
      {POSTS.map((elem, index) => (
        <Post key={index} post={elem} />
      ))}
    </ScrollView>
    <BottomTabs />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
