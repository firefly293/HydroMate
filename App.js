
import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font'
import { registerRootComponent } from 'expo';

import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  console.log("App executed!")

  const [fontsLoaded, fontError] = useFonts({
    'Coolvetica': require('./app/assets/fonts/Coolvetica.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <HomeScreen/>
  );
}