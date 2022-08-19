import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <View>
      {/*여기는 주석*/}
      <Text>Greeting name : {props.name}</Text>
      <Text>Greeting color : {props.color}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'react',
  color: 'white',
};

export default Greeting;
