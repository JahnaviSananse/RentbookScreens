import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import THEME from '../../constants/colors';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    borderBottomLeftRadius: 45,
  },
  container1: {
    flex: 1,
    backgroundColor: THEME.BLACK,
  },
  stretch: {
    width: '45%',
    height: '80%',
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 30,
  },
  imageView: {
    // backgroundColor: 'pink',
  },
  titleView: {marginTop: 20},
  titleText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
  secondaryView: {
    // backgroundColor: 'pink',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  secondaryText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
  },
});

export default Page;
