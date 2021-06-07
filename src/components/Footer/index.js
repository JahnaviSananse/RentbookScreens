import React from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import {IMAGE} from '../../assets/images';
import RoundedButton from '../RoundedButtons/index';
import {styles} from './styles';
const Footer = ({
  rightButtonLabel = false,
  rightButtonPress = false,
  boldCount,
  lightCount,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: HEIGHT,
          paddingHorizontal: FOOTER_PADDING,
        }}>
        <Image style={styles.footer} source={IMAGE.FOOTER} />
        <View
          style={{
            fle: 1,
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            left: 55,
            alignSelf: 'center',
          }}>
          {boldCount?.map(value => {
            return (
              <View style={{height: 5, width: 20, backgroundColor: 'white'}} />
            );
          })}
          {lightCount?.map(value => {
            return (
              <View style={{height: 5, width: 20, backgroundColor: 'grey'}} />
            );
          })}
        </View>
        <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
      </View>
    </View>
  );
};

export default Footer;
