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
import tabStyle from "../../style/tabStyles";

const Settings = () => {
  return (
    <SafeAreaView style={tabStyle.container}>
      <View style={tabStyle.header}>
        <View style={tabStyle.headContentHolder}></View>
      </View>
      <ScrollView style={chatStyles.chatContainer}>
        <View style={tabStyle.header}>
          <Text style={tabStyle.headText}>Settings</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
const chatStyles = StyleSheet.create({
  header: {
    height: 45,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});
