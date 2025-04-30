import React from "react";
import { TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";

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
      <Text style={styles.label}>{data.label}</Text>
      <Text style={styles.label}>{data.value}</Text>
      <Text style={styles.date}>{data.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});
