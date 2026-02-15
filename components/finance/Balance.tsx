import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";

interface BalanceProps {
  saldo: string;
  gastos: string;
}

export default function Balance({ saldo, gastos }: BalanceProps) {
  return (
    <MotiView
      from={{
        opacity: 0,
        rotateX: "-360deg",
      }}
      animate={{
        opacity: 1,
        rotateX: "0deg",
      }}
      transition={{
        type: "timing",
        duration: 900,
        delay: 300,
      }}
      style={styles.container}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "#009688",
    paddingVertical: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#C0C0C0",
  },
  currentSymbol: {
    color: "#C0C0C0",
    marginRight: 6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    fontSize: 22,
    color: "#14b600",
  },
  expenses: {
    fontSize: 22,
    color: "#ff0000",
  },
  item: {
    flex: 1,
  },
});
