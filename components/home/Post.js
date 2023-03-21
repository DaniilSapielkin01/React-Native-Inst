import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import {
  collectionIcon,
  likeIcon,
  messageIcon,
  reportIcon,
} from "../../assets/image/default-icons";

const Post = ({ post }) => (
  <View style={{ marginBottom: 30 }}>
    <Divider width={1} orientation="vertical" />
    <PostHeader post={post} />
    <PostImage post={post} />
    <View style={{ marginTop: 10 }}>
      <PostFooter post={post} />
    </View>
  </View>
);

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={styles.block}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white" }}>{post.user}</Text>
    </View>

    <TouchableOpacity>
      <Text style={{ color: "white", fontWeight: "900", paddingBottom: 7 }}>
        ...
      </Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <SvgXml xml={likeIcon} style={styles.iconFooter} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml xml={messageIcon} style={styles.iconFooter} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml xml={reportIcon} style={styles.iconFooter} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <SvgXml
            xml={collectionIcon}
            style={{ ...styles.iconFooter, marginRight: 0 }}
          />
        </TouchableOpacity>
      </View>
    </View>
    <Text style={{ color: "white", marginTop: 7, fontWeight: 600 }}>
      {post.likes.toLocaleString("en")}{" "}
      {post.likes.length <= 1 ? "like" : "likes"}
    </Text>

    <Caption post={post} />
    <CommentSection post={post} />
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: 600 }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: "grey" }}>
        View {post.comments.length > 1 ? "all " : ""}
        {post.comments.length}
        {post.comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
    <Comments post={post} />
  </View>
);

const Comments = ({ post }) => (
  <View>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ marginBottom: 3.5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: 600 }}>{comment.user} </Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    marginRight: 5,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ff9501",
  },
  block: {
    alignItems: "center",
    flexDirection: "row",
  },

  iconFooter: {
    width: 30,
    height: 30,
    marginRight: 6,
    resizeMode: "contain",
  },
});

export default Post;
