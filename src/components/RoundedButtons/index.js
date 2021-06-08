import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const RoundedButton = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnView} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
