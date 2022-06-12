import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Otp from '../screens/Otp';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import HomeNav from './HomeNav';

export type AuthNavParamList = {
    Signup: undefined;
    Signin: undefined;
    HomeNav: undefined;
    Otp: undefined;
};

const Stack = createStackNavigator<AuthNavParamList>();

function AuthNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="HomeNav" component={HomeNav} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Otp" component={Otp} />
         
    </Stack.Navigator>
  );
}

export default AuthNav;
