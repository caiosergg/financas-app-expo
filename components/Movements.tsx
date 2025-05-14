import React from "react";
import { TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import { MotiView, MotiText, AnimatePresence } from "moti";

interface MovementsProps {
  data: {
    id: number;
    label: string;
    value: string;
    date: string;
    type: number; // 0 = despesas, 1 = receitas
  };
}

export default function Movements({ data }: MovementsProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={[
          styles.value,
          { color: data.type === 0 ? "#FF3D00" : "#00BFA5" },
        ]}
      >
        {data.label}
      </Text>
      <Text style={styles.value}>{data.value}</Text>
      <Text style={styles.date}>{data.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});
