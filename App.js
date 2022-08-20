/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Counter from './components/Counter';

const styles = StyleSheet.create({
  full: {
    flex: 1,
    /*backgroundColor: 'cyan',*/
  },
});

const App = () => {
  const name = {
    greetName: 'G',
    boxName: 'B',
  };

  const [visible, setVisible] = useState(true);
  const onPress = () => {
    console.log('visible : ', visible);
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={[styles.full]}>
      <Greeting name={name.greetName} />
      <Button title="toggle" onPress={onPress} />
      {visible && (
        <Box name={name.boxName} rounded={true} size="large" color="pink" />
      )}
      <Counter />
    </SafeAreaView>
  );
};

export default App;
