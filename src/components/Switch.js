import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Home } from './Home/index';
import { Notification } from './Intro/Notification/index';
import { Welcome } from './Intro/Welcome/index';

const Stack = createStackNavigator();

export const Switch = () => {
  const page = useSelector(state => state.page);
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }} headerMode="none">
        {page === 'setup' ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Notification" component={Notification} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
