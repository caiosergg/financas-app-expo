import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MovementItem } from "@/types/movement";

interface MovementsProps {
  data: MovementItem;
}

export default function Movements({ data }: MovementsProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={[
          styles.label,
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
    borderBottomColor: "#222",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
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
