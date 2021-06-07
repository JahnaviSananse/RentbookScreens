import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const RoundedButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        // backgroundColor: 'pink',
        justifyContent: 'center',
        // alignSelf: 'center',
        // marginLeft: '35%',

        top: 30,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Source Sans Pro',
          fontStyle: 'normal',
          fontSize: 15,
          lineHeight: 19,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
