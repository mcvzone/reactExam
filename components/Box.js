import React from 'react';
import {StyleSheet, View} from 'react-native';

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 50,
    color: 'white',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 30,
    height: 30,
  },
  medium: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

/* props param
function Box(props) {
  return (
    <View
      style={[
        styles.box,
        props.rounded && styles.rounded,
        sizes[props.size],
        {backgroundColor: props.color},
      ]}
    />
  );
}
*/

function Box({rounded, size, color}) {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
}

export default Box;
