import React from 'react';
import { CompositeScreenProps, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { RootStackParamList } from '../types';
import BottomTabNav from './BottomTabNav';

// import { Container } from './styles';

export default function Navigation(): JSX.Element {
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
  
    </Stack.Navigator>
  );
}

return <NavigationContainer>
      <RootNavigator />
  </NavigationContainer>;
}

;