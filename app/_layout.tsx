import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync(); // Prevent Splachscreen from exit before stuffs load

const RootLayout = () => {
  // Load fonts
  // Fix the F**king italic shii thats not working

  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/popins/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/popins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/popins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/popins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/popins/Poppins-SemiBold.ttf"),
    "Poppins-LightItalic": require("../assets/popins/fonts/Italic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <Stack>
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
