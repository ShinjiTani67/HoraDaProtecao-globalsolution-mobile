import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from '../context/AuthProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto"/>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="about"/>
            <Stack.Screen name="signin"/>
            <Stack.Screen name="homescreen"/>
            <Stack.Screen name="zonasperigo"/>
            <Stack.Screen name="riskarea"/>
          </Stack>
        </ThemeProvider>
      </SafeAreaView>
    </AuthProvider>
  );
}
