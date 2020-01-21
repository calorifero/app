import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { FormBox } from "./components/FormBox/index";

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <FormBox />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default registerRootComponent(App);
