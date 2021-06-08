import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
  },
  container1: {
    flex: 1,
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
