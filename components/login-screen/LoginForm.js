import React, { useState } from "react";
import { signInwithEmailAndPassword } from "firebase/app";
import { Alert, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "../../firebase";
import Validator from "email-validator";

const schemaLogin = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  password: Yup.string()
    .required()
    .min(6, "Your password ha to have at least 6 characters"),
});

const LoginForm = ({ navigation }) => {
  const onLogin = async (email, password) => {
    try {
      console.log(email, password);

      // await firebase.auth().signInwithEmailAndPassword(email, password);
      await navigation.push("HomeScreen");
      console.log("Firebase log in succesful");
    } catch (e) {
      console.log("Firebase log in error !!!");
      Alert.alert(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => onLogin(values.email, values.password)}
      validationSchema={schemaLogin}
      validateOnMount
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <View style={{ marginTop: 60 }}>
          <View
            style={[
              styles.inputField,
              {
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "#ccc"
                    : "tomato",
              },
            ]}
          >
            <TextInput
              placeholderTextColor={"#444"}
              placeholder="Phone number, username or email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
          </View>
          <View
            style={[
              styles.inputField,
              {
                borderColor:
                  1 > values.password.length || values.password.length >= 6
                    ? "#ccc"
                    : "tomato",
              },
            ]}
          >
            <TextInput
              placeholderTextColor="#444"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>
          <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
            <Text style={{ fontSize: 14, color: "#6bb0f5" }}>
              Forgot password
            </Text>
          </View>
          <Pressable
            titleSize={20}
            style={styles.btn(isValid)}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.textBtn}>Log in</Text>
          </Pressable>

          <View style={styles.signupContainer}>
            <Text>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.push("SigneUpScreen")}>
              <Text style={{ color: "#6bb0f5" }}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
  },
  btn: (isValid) => ({
    backgroundColor: isValid ? "#0096f5" : "#9acaf7",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    borderRadius: 4,
  }),

  textBtn: {
    fontWeight: 600,
    fontSize: 18,
    color: "white",
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
