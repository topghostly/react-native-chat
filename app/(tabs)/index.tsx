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
import tabStyle from "../../style/tabStyles";
import ChatDetails from "../../components/tabComponents/ChatDetails";

const index = () => {
  return (
    <SafeAreaView style={tabStyle.container}>
      <View style={tabStyle.header}>
        <View style={tabStyle.headContentHolder}>
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
        <View style={tabStyle.textHeader}>
          <Text style={tabStyle.headText}>Messages</Text>
          <TouchableOpacity style={chatStyles.archieve}>
            <Image
              source={icons.archieve}
              style={{
                width: 18,
                height: 18,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
            >
              Archieve Chat
            </Text>
          </TouchableOpacity>
        </View>
        <View style={chatStyles.chatHolder}>
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
          <ChatDetails />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const chatStyles = StyleSheet.create({
  header: {
    height: 45,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  archieve: {
    backgroundColor: "#cecece",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 7,
    borderCurve: "continuous",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  chatHolder: {
    paddingTop: 5,
  },
});

// color: #041a7d
// Theme color: #014bac
// Gray color: #cecece
// New color: #d0bd9c
