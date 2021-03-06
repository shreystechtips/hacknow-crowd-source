import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
// await loadAsync({
//   // Any string can be used as the fontFamily name. Here we use an object to provide more control
//   'robot-regular': {
//     uri: require('./assets/fonts/robot-regular.ttf'),
//     fontDisplay: FontDisplay.FALLBACK,
//   },
// });

async function MaterialButtonViolet1(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    // fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet1;
