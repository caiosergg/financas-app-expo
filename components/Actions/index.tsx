import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    maxHeight: "100%",
    height: 150,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
  },
  actionButton: {
    paddingTop: 10,
    marginRight: 32,
    marginTop: 14,
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 5,
  },
  labelButton: {
    backgroundColor: "#000",
    marginTop: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  areaButton: {
    height: 60,
    width: 60,
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
