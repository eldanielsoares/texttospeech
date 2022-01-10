/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

import Home from './Pages/Home';
const App: React.FC = () => {

  return (
    <>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'light-content'} />
      <Home />
    </>
  );
};

export default App;
