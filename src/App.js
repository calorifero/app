import React, { useEffect } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StyleSheet, Text, StatusBar, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './redux/store';
import { Home } from './components/Home/index';
import { lightTheme } from './common/theme/lightTheme';
import { darkTheme } from './common/theme/darkTheme';
import { Notification } from './components/Intro/Notification/index';
import { Welcome } from './components/Intro/Welcome/index';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  const theme = useColorScheme() === 'light' ? lightTheme : darkTheme;
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles(theme).container}>
            <StatusBar
              barStyle={`${useColorScheme() === 'light' ? 'dark-content' : 'light-content'}`}
            />

            <NavigationContainer>
              <Stack.Navigator options={{ headerShown: false }} headerMode="none">
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};

const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: props.background,

      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });

export default registerRootComponent(App);
