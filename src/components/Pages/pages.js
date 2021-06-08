import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import THEME from '../../constants/colors';
import {styles} from './styles';

const Page = ({title, secondaryText, image}) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}> {title} </Text>
        </View>
        <View style={styles.secondaryView}>
          <Text style={styles.secondaryText}> {secondaryText} </Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.stretch} source={image} />
        </View>
      </View>
    </View>
  );
};

export default Page;
