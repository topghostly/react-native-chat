import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../../constant";

interface chatDetailsProps {}

const ChatDetails: React.FC<chatDetailsProps> = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.gridHolder}>
        <View style={styles.imageHolder}>
          <Image
            source={icons.avatar}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>

        {/* Chat name and last message sent preview */}
        <View style={styles.chatNameHolder}>
          <Text style={styles.chatName}>Judy Bense</Text>
          <Text
            style={styles.lastMessage}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            rerum quae quod nam neque asperiores repellendus corporis
            voluptates.
          </Text>
        </View>

        {/* Last notification part */}
        <View style={styles.timeDateNotification}>
          <Text style={styles.chatTime}>02:45</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
  gridHolder: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 8,
    gap: 10,
  },

  // Chat image style
  imageHolder: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 100,
  },

  // Style for name and last messgae holder
  chatNameHolder: {
    paddingVertical: 2,
    flex: 1,
  },
  chatName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  lastMessage: {
    fontSize: 15,
    color: "#8f8f8f",
    fontFamily: "Poppins-Medium",
  },

  // Notification part
  timeDateNotification: {
    width: 40,
    alignItems: "flex-end",
    // justifyContent: "to",
  },
  chatTime: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#8f8f8f",
  },
});
