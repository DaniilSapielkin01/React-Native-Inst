import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  headerLogo,
  plusIcon,
  messageIcon,
  likeIcon,
} from "../../assets/image/default-icons.js";
import { SvgXml } from "react-native-svg";

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <SvgXml xml={headerLogo} style={styles.logo} />
    </TouchableOpacity>

    <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
        <SvgXml xml={plusIcon} style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={likeIcon} style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>11</Text>
        </View>
        <SvgXml xml={messageIcon} style={styles.icons} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    color: "white",
    width: 100,
    height: 50,
    resizeMode: "containe",
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    borderRadius: "50%",
    position: "absolute",
    top: -7,
    left: 18,
    bottom: 0,
    width: 24,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  unreadBadgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "white",
  },
});

export default Header;
