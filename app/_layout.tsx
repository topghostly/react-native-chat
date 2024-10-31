import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React from "react";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home" />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
