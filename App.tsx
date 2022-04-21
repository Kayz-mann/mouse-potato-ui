import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import AppLoading from 'expo-app-loading';

import { fetchFonts } from './fontSettings';
import theme from './src/components/Theme';




export default function App() {
  
  const [loading, setLoading] = useState<boolean>(false);
  if (!loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
