import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '../context/AuthProvider';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

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
                name="homescreen"
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
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
