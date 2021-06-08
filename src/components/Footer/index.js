import React from 'react';
import {View, useWindowDimensions, Image, Dimensions} from 'react-native';
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
  const HEIGHT = useWindowDimensions().height * 0.2;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: HEIGHT,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: Dimensions.get('screen').width,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 45,
          }}>
          <View style={styles.statusView}>
            {boldCount?.map(value => {
              return <View style={styles.boldView} />;
            })}
            {lightCount?.map(value => {
              return <View style={styles.lightView} />;
            })}
          </View>

          <RoundedButton
            label={
              lightCount.length == 1 || lightCount.length == 0
                ? 'GET STARTED'
                : rightButtonLabel
            }
            onPress={rightButtonPress}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;
