import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "@/components/Header";
import Balance from "@/components/Balance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Olá, Caio" />
      <Balance saldo="15.537,90" gastos="357,48" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
