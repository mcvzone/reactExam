import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center' /*가로 정렬*/,
    justifyContent: 'center' /*세로 정렬*/,
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

function Counter({count, onIncrease, onDecrease}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
}

Counter.defaultProps = {
  count: 0,
};

export default Counter;
