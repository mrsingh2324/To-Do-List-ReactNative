import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
      <Text style={styles.text}>This is {props.text}</Text>
      </View>
      <View style={styles.circular}>
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
  },
  text: {
    maxWidth: "80%",

  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,    

  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    
  },
});

export default Task;
