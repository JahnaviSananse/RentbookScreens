import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  blackContainer: {
    height: '35%',
    backgroundColor: 'white',
  },
  fillText: {
    color: THEME.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
  },
  unfillText: {
    fontWeight: 'normal',
    fontSize: 15,

    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    lineHeight: 19,
  },
  fillButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    width: 200,
    marginTop: 20,
  },
  unfillButton: {
    // justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: THEME.WHITE,
    borderRadius: 10,
    height: 40,
    width: 200,
    paddingTop: 10,
    marginBottom: 20,
  },
});
export default styles;
