/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const name = {
    greetName: 'G',
    boxName: 'B',
  };

  return (
    <SafeAreaView>
      <Greeting name={name.greetName} />
      <Box name={name.boxName} rounded={true} size="small" />
      <Box name={name.boxName} rounded={false} size="medium" />
      <Box name={name.boxName} rounded={true} size="large" color="pink" />
    </SafeAreaView>
  );
};

export default App;
