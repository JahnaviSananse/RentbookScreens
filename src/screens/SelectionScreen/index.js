import React from 'react';
import {Text, Image, StyleSheet, SafeAreaView, View} from 'react-native';
import {IMAGE} from '../../assets/images';
import * as string from '../../constants/constant';
import {styles} from './styles';
import Button from '../../components/Button/index';
import {useNavigation} from '@react-navigation/native';
const SelectionScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'black'}}>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              backgroundColor: 'black',
              height: 200,
              width: '100%',
              borderBottomLeftRadius: 40,
            }}></View>
          {/* <Image style={styles.header} source={IMAGE.HEADER} /> */}

          <View style={styles.logoView}>
            <Image style={styles.logo} source={IMAGE.RENTBOOK_LOGO} />
          </View>
        </View>

        <View style={styles.compView}>
          <View style={styles.primaryTextView}>
            <Text style={styles.primaryText}>
              {string.PLEASE_SELECT_YOUR_ROLE}
            </Text>
          </View>
          <View style={styles.secondayTextView}>
            <Text style={styles.secondayText}>
              {string.YOU_CAN_SWITCH_YOUR_ROLE_LATER_IF_YOU_WANT}
            </Text>
          </View>
          <View style={styles.roleView}>
            <Text style={styles.secondayText}>{string.ROLE}</Text>
          </View>
          <View style={styles.tenantBtn}>
            <Button
              title={string.TENANT}
              onPress={() => navigation.navigate('Tenant')}
            />
          </View>
          <View>
            <Button
              title={string.PROPERTY_MANAGER}
              onPress={() => navigation.navigate('PropertyManager')}
            />
          </View>
          <View style={styles.proceedBtn}>
            <Button type="fill" title={string.PROCEED} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectionScreen;
