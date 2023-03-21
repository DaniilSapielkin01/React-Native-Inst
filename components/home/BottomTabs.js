import React, { useState } from "react";
import { Divider } from "@rneui/themed";
import {
  homeIcon,
  reelsIcon,
  exploreIcon,
  collectionIcon,
  searchIcon,
} from "../../assets/image/default-icons";
import { defaultIcon } from "../../data/users";
import { SvgXml } from "react-native-svg";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const iconArray = [
  {
    name: "Home",
    icon: homeIcon,
  },
  {
    name: "Search",
    icon: searchIcon,
  },
  {
    name: "Explore",
    icon: exploreIcon,
  },
  {
    name: "Reels",
    icon: reelsIcon,
  },
  {
    name: "Profile",
  },
];

const BottomTabs = ({ params }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      {icon.name !== "Profile" ? (
        <SvgXml xml={icon.icon} style={styles.icon} />
      ) : (
        <Image
          source={{ uri: defaultIcon }}
          style={{ ...styles.icon, width: 27, height: 27, borderRadius: 50 }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper} width={1}>
      <Divider />
      <View style={styles.blockIcon}>
        {iconArray.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
    width: "100%",
    bottom: "3%",
    position: "absolute",
    backgroundColor: "#000",
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default BottomTabs;
