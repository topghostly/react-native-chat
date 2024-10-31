import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CircleHolder from "../../components/CircleHolder";
import { icons } from "../../constant";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headContentHolder}>
          <CircleHolder width={30} color="#cecece">
            <Image
              source={icons.option}
              resizeMode="contain"
              style={{
                width: 25,
              }}
            />
          </CircleHolder>
          <CircleHolder width={35} color="#014bac">
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{
                width: 20,
                tintColor: "white",
              }}
            />
          </CircleHolder>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  header: {
    width: "100%",
    // backgroundColor: "red",
    height: 50,
  },
  headContentHolder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

// color: #041a7d
// Theme color: #014bac
// Gray color: #cecece
