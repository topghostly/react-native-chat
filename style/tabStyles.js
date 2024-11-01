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
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
  },
  headText: {
    fontSize: 35,
    fontFamily: "Poppins-SemiBold",
  },
});

export default tabStyle;
