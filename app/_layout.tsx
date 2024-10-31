import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
