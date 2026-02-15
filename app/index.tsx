import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "@/components/finance/Header";
import Balance from "@/components/finance/Balance";
import Movements from "@/components/finance/Movements";
import Actions from "@/components/finance/Actions";

import { MovementItem } from "@/types/movement";

const list: MovementItem[] = [
  {
    id: 1,
    label: "Compra na loja",
    value: "R$ 50,00",
    date: "30/04/2025",
    type: 0,
  },
  {
    id: 2,
    label: "Pagamento de conta",
    value: "R$ 100,00",
    date: "22/06/2025",
    type: 0,
  },
  {
    id: 3,
    label: "Transferência recebida",
    value: "R$ 200,00",
    date: "17/08/2025",
    type: 1,
  },
  {
    id: 4,
    label: "Assinatura de streaming",
    value: "R$ 39,90",
    date: "05/09/2025",
    type: 0,
  },
  {
    id: 5,
    label: "Depósito em conta",
    value: "R$ 500,00",
    date: "12/10/2025",
    type: 1,
  },
  {
    id: 6,
    label: "Pagamento de boleto",
    value: "R$ 250,75",
    date: "03/11/2025",
    type: 0,
  },
  {
    id: 7,
    label: "Pagamento de boleto",
    value: "R$ 250,75",
    date: "03/11/2025",
    type: 0,
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
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Movements data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
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
    marginLeft: 16,
    paddingBottom: 14,
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 14,
  },
});
