import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#181818",
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 55,
        },
      }}
    >
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
