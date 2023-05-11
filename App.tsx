
import * as React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { expo } from './app.json'
import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>

      <PaperProvider>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
        <Home />
      </PaperProvider>
    </SafeAreaView>
  );
}

AppRegistry.registerComponent(expo.name, () => App);
