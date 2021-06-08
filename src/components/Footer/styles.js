import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';
export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    width: '125%',
    height: 150,
    resizeMode: 'stretch',
    borderTopRightRadius: 10,
  },
  statusView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  boldView: {height: 5, width: 20, backgroundColor: THEME.WHITE},
  lightView: {height: 5, width: 20, backgroundColor: THEME.GREY},
});
