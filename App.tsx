import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './screens/auth';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AsyncDeleteItem } from './utils';

export default function App() {
  const [fontsLoaded] = useFonts({
    pacifico: Pacifico_400Regular
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    // AsyncDeleteItem("token");
    SplashScreen.preventAutoHideAsync()
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <MainContainer />
        <StatusBar style="light" />
      </Provider>
    </SafeAreaProvider>
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
