import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";

interface propsinterface {
  width: number;
  children: ReactNode;
  color: string;
}

const CircleHolder: React.FC<propsinterface> = ({ width, children, color }) => {
  return (
    <TouchableOpacity
      style={{
        width,
        aspectRatio: 1,
        backgroundColor: color,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CircleHolder;

const styles = StyleSheet.create({});
