import { StyleSheet } from "react-native";

const tabStyle = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  header: {
    width: "100%",
    height: 45,
  },
  headContentHolder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  textHeader: {
    height: 45,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headText: {
    fontSize: 35,
    fontWeight: "700",
  },
});

export default tabStyle;
