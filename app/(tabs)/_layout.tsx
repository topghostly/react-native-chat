import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import Tab from "../../components/Tab";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <Tab {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Chat",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Chat",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
