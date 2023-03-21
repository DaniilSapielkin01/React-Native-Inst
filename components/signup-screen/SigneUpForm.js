import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const schemaSignUp = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  username: Yup.string().email().required().min(2, "An user name is required"),
  password: Yup.string()
    .required()
    .min(6, "Your password ha to have at least 6 characters"),
  newPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SigneUpForm = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        newPassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        navigation.push("LoginScreen");
      }}
      validationSchema={schemaSignUp}
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
              placeholder="Email"
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
              placeholder="User name"
              autoCapitalize="none"
              autoCorrect={false}
              //   secureTextEntry
              textContentType="username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
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
          <View
            style={[
              styles.inputField,
              {
                borderColor:
                  1 > values.newPassword.length ||
                  (values.password.length >= 6 &&
                    values.password === values.newPassword)
                    ? "#ccc"
                    : "tomato",
              },
            ]}
          >
            <TextInput
              placeholderTextColor="#444"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="newPassword"
              onChangeText={handleChange("newPassword")}
              onBlur={handleBlur("newPassword")}
              value={values.newPassword}
            />
          </View>
          <Pressable
            titleSize={20}
            style={styles.btn(isValid)}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.textBtn}>Sign up</Text>
          </Pressable>

          <View style={styles.signupContainer}>
            <Text>Do you have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
              <Text style={{ color: "#6bb0f5" }}> Log in</Text>
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

export default SigneUpForm;
