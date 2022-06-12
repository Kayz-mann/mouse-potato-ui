import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

import { RootStackParamList } from '../types';
import BottomTabNav from './BottomTabNav';
import AuthNav from './AuthNav';
import { useAppSelector } from '../redux/hooks';
import useAuth from '../auth/useAuth';
import storageKeys from '../constants/storageKeys';
import storage from '../utils/storage';
import authApi from '../api/auth';


export default function Navigation(): JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();
  const [isReady, setIsReady] = useState<boolean>(false);
  const auth = useAuth();
  
  const isAuthenticated = useAppSelector((state) => state.login.isLoggedIn);

  // const restoreUser = async () => {
  //   const userData = await storage.getData(storageKeys.USER);

  //   if (userData) {
  //     const isAllowedToLogin = await authApi.validateLogin({
  //       refresh_token: userData.refresh_token,
  //       user_id: userData.auth.id,
  //     });

  //     if (isAllowedToLogin.data.status !== 'success') {
  //       await auth.logout();
  //     } else {
  //       await auth.login(userData);
  //     }
  //   } else {
  //     await auth.logout();
  //   }
  // };

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
  
    </Stack.Navigator>
  );
}

// if (!isReady)
// return (
//   <AppLoading
//     startAsync={restoreUser}
//     onFinish={() => setIsReady(true)}
//     onError={console.warn}
//   />
// );
return <NavigationContainer>
      {isAuthenticated ? <RootNavigator /> : <AuthNav />}
  </NavigationContainer>;
};