import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MotiView, MotiText } from "moti";
import { Feather } from "@expo/vector-icons";

const colors = {
  primary: "#009688",
};

interface HeaderProps {
  name: string;
}

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }: HeaderProps) {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{ opacity: 0, translateY: -150 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <MotiText
          style={styles.userName}
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </MotiText>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 14,
    textAlign: "left",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif-medium",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});
