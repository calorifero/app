import React from "react";
import { StyleSheet, Text, View, SafeAreaView  } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./components/Home/index";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView >
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default registerRootComponent(App);
