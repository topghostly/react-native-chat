import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Image,
} from "react-native";
import { icons } from "../constant";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const Tab: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const currentRoute = state.routes[state.index].name;
  if (currentRoute === "detail/[id]") {
    return null;
  }
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={
              {
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                paddingHorizontal: 12,
                borderCurve: "continuous",
                // backgroundColor: isFocused ? "black" : null,
                paddingVertical: 8,
              } as ViewStyle
            }
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Image
              source={route.name === "settings" ? icons.settings : icons.chat}
              style={{
                width: 32,
                height: 32,
                tintColor: isFocused ? "#242424" : "#aaaaaa",
              }}
            />
            {/* <Text
              style={{
                color: isFocused ? "#000000" : "#aaaaaa",
                fontFamily: "NeueMontreal-Medium",
                fontSize: 10,
                textTransform: "capitalize",
              }}
            >
              {route.name}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dfdfdf",
    width: 250,
    left: "50%",
    transform: [{ translateX: -125 }],
    // paddingHorizontal: 2,
    paddingVertical: 3,
    borderRadius: 20,
    borderCurve: "continuous",
  },
  tabButtons: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 25,
    paddingHorizontal: 10,
    borderCurve: "continuous",
  },
});
