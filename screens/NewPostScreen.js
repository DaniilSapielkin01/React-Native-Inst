import React from "react";
import AddNewPost from "../components/new-post/AddNewPost";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import FormikPostUpLoader from "../components/new-post/FormikPostUpLoader";

const NewPostScreen = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost navigation={navigation} />
      <FormikPostUpLoader navigation={navigation} />
    </SafeAreaView>
  </TouchableWithoutFeedback>
);

export default NewPostScreen;
