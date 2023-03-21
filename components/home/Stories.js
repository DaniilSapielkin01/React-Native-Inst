import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { USERS, defaultIcon } from "../../data/users";

const Stories = () => (
  <View style={{ marginBottom: 13, marginTop: 10 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) => (
        <View key={index} style={{ alignItems: "center", marginLeft: 6 }}>
          <Image
            source={{ uri: story.image ?? defaultIcon }}
            style={styles.story}
          />
          <Text style={styles.text}>
            {story.user.length > 11
              ? story.user.slice(0, 10).toLocaleLowerCase() + "..."
              : story.user}
          </Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default Stories;
