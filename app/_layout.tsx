import { Stack, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { AuthProvider, useAuth } from '@/context/AuthProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBmJh7mewTXxUIdCXwXV_PFIpc22DagoDc",
  authDomain: "hora-da-protecao.firebaseapp.com",
  projectId: "hora-da-protecao",
  storageBucket: "hora-da-protecao.firebasestorage.app",
  messagingSenderId: "479715828390",
  appId: "1:479715828390:android:2c9e4bfe782a4d6744ca67",
  measurementId: "G-Q4207EHJMP"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const colorScheme = useColorScheme();

  if (loading) {
    return null; // or a loading screen
  }

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
                name="HomeScreen"
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

const RootLayout = () => {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
};

export default RootLayout;
