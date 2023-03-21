import React from "react";
import { Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StyleSheet, View } from "react-native";
import SigneUpForm from "../components/signup-screen/SigneUpForm";

const INST_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

const SignUpScreen = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INST_LOGO, height: 100, width: 100 }} />
      </View>
      <SigneUpForm navigation={navigation} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignUpScreen;
