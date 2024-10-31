import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
          <CircleHolder width={33} color="#d0bd9c">
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
      <ScrollView style={chatStyles.chatContainer}>
        <View style={chatStyles.header}>
          <Text style={chatStyles.headText}>Messages</Text>
          <TouchableOpacity style={chatStyles.archieve}>
            <Image
              source={icons.archieve}
              style={{
                width: 4,
                aspectRatio: 1,
              }}
            />
            <Text
              style={{
                color: "black",
              }}
            >
              Archieve Chat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  header: {
    width: "100%",
    height: 45,
  },
  headContentHolder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

const chatStyles = StyleSheet.create({
  header: {
    height: 45,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  archieve: {
    backgroundColor: "blue",
    height: 40,
    flexShrink: 1,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  headText: {
    fontSize: 35,
    fontWeight: "700",
  },
});

// color: #041a7d
// Theme color: #014bac
// Gray color: #cecece
// New color: #d0bd9c
