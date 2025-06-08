import { Stack, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { AuthProvider, useAuth } from '@/context/AuthProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

function RootLayoutNav() {
  const { user } = useAuth();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto"/>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack 
          screenOptions={{ 
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          {!user ? (
            // Auth screens
            <>
              <Stack.Screen 
                name="index"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name="signin"
                options={{
                  headerShown: false,
                  animation: 'slide_from_right'
                }}
              />
            </>
          ) : (
            // App screens
            <>
              <Stack.Screen 
                name="Homescreen"
                options={{
                  headerShown: false,
                  animation: 'slide_from_right'
                }}
              />
              <Stack.Screen 
                name="about"
                options={{
                  headerShown: false,
                  animation: 'slide_from_right'
                }}
              />
              <Stack.Screen 
                name="zonasperigo"
                options={{
                  headerShown: false,
                  animation: 'slide_from_right'
                }}
              />
              <Stack.Screen 
                name="riskarea"
                options={{
                  headerShown: false,
                  animation: 'slide_from_right'
                }}
              />
            </>
          )}
        </Stack>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
