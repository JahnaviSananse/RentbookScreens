import {StyleSheet} from 'react-native';
import THEME from '../../../constants/colors';
export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 190,
    resizeMode: 'stretch',
  },
  mainContainer: {flex: 1, backgroundColor: THEME.BLACK},
  backView: {
    backgroundColor: THEME.RED,
    height: '80%',
    borderBottomLeftRadius: 45,
    overflow: 'hidden',
  },
  logo: {
    width: 109,
    height: 69.16,
  },
  pageView: {flex: 1, backgroundColor: THEME.BLACK},
  viewFooter: {borderBottomLeftRadius: 45},
  logoView: {
    position: 'absolute',
    paddingTop: 50,
    alignSelf: 'center',
  },
  primaryText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: THEME.BLACK,
    alignSelf: 'center',
    marginTop: 22,
  },
  primaryTextView: {
    marginTop: 22,
  },
  secondayText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'center',
    color: THEME.GREY,
  },
  secondayTextView: {
    marginTop: 30,
  },
  roleView: {
    marginTop: 41,
  },
  tenantBtn: {
    marginTop: 20,
  },
  proceedBtn: {
    marginTop: 75,
  },
});
