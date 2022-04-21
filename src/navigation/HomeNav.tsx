import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from '../screens/Home';
export type HomeNavParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeNavParamList>();

function HomeNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNav;
