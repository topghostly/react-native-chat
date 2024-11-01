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
              width: 55,
              height: 55,
            }}
          />
        </View>

        {/* Chat name and last message sent preview */}
        <View style={styles.chatNameHolder}>
          <Text style={styles.chatName}>Judy Bense</Text>
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
  imageHolder: {
    width: 55,
    aspectRatio: 1,
    borderRadius: 100,
  },
  // Style for name and last messgae holder

  chatNameHolder: {
    paddingVertical: 2,
  },
  chatName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
});
