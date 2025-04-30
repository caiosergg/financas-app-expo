import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "@/components/Header";
import Balance from "@/components/Balance";
import Movements from "@/components/Movements";

interface ListProps {
  id: number;
  label: string;
  value: string;
  date: string;
  type: number;
}
// 0 = despesas, 1 = receitas

const list: ListProps[] = [
  {
    id: 1,
    label: "Compra na loja",
    value: "R$ 50,00",
    date: "30/04/2025",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pagamento de conta",
    value: "R$ 100,00",
    date: "22/06/2025",
    type: 0, //despesas
  },
  {
    id: 3,
    label: "Transferência recebida",
    value: "R$ 200,00",
    date: "17/08/2025",
    type: 1, //receitas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Olá, Caio" />

      <Balance saldo="15.537,90" gastos="357,48" />

      <Text style={styles.title}>Últimas transações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "left",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
