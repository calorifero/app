import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home } from './components/Home/index';
import { lightTheme } from './common/theme/lightTheme';
import { darkTheme } from './common/theme/darkTheme';
import { Theme } from './style';

const App = () => {
  const theme = useColorScheme() === 'light' ? lightTheme : darkTheme;
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.container}>
            <Home />
          </SafeAreaView>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default registerRootComponent(App);
