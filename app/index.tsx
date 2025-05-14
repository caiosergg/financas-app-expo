import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "@/components/Header";
import Balance from "@/components/Balance";
import Movements from "@/components/Movements";
import Actions from "@/components/Actions";

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
  {
    id: 4,
    label: "Pagamento de salário",
    value: "R$ 1.500,00",
    date: "01/09/2025",
    type: 1, //receitas
  },
  {
    id: 5,
    label: "Compra na loja",
    value: "R$ 50,00",
    date: "30/04/2025",
    type: 0, //despesas
  },
  {
    id: 6,
    label: "Pagamento de conta",
    value: "R$ 100,00",
    date: "22/06/2025",
    type: 0, //despesas
  },
  {
    id: 7,
    label: "Transferência recebida",
    value: "R$ 200,00",
    date: "17/08/2025",
    type: 1, //receitas
  },
  {
    id: 8,
    label: "Pagamento de salário",
    value: "R$ 1.500,00",
    date: "01/09/2025",
    type: 1, //receitas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Olá, Caio" />

      <Balance saldo="5.537,90" gastos="357,48" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

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
    fontSize: 19,
    marginStart: 16,
    paddingBottom: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
