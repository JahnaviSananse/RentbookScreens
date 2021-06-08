import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {IMAGE} from '../../../assets/images';
import Footer from '../../../components/Footer/index';
import {styles} from './styles';
import Page from '../../../components/Pages/pages';

const PropertyManager = () => {
  const pagerRef = useRef(null);
  const [boldCount, setBoldCount] = useState([0]);
  const [lightCount, setLightCount] = useState([0, 1, 2, 3, 4]);
  const [activePage, setActivePage] = useState(0);
  const pageHandle = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <PagerView
          initialPage={0}
          scrollEnabled={false}
          ref={pagerRef}
          style={styles.pageView}>
          <View key="1" style={styles.viewFooter}>
            <Page
              title="PROPERTY PROFILE"
              secondaryText="Create a Property Profile under the Properties tab."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="2">
            <Page
              title="CREATE ROOMS & UNITS"
              secondaryText="Select your proeprty and customize it to your liking. You need a unit to add a tenant to the property."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="3">
            <Page
              title="CONNECT BANK ACCOUNT"
              secondaryText="Connect your bank account under ‘Settings’ to start adding tenants to your units and accepting payments."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="4">
            <Page
              title="ADDING A TENANT TO A UNIT"
              secondaryText="After Connecting your bank account, you can start adding tenants to your units and directly send them Payment Agreements."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="5">
            <Page
              title="MANAGE TASKS"
              secondaryText="Create and record maintenance tasks & more with progress tracking."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="6">
            <Page
              title="TRACK PAYMENTS"
              secondaryText="Record transactions and manage your transaction history under the Financials tab."
              image={IMAGE.MOBILE1}
            />
          </View>
        </PagerView>
      </View>
      <Footer
        rightButtonLabel="NEXT"
        rightButtonPress={() => {
          if (boldCount.length <= 5) {
            setBoldCount([...boldCount, 1]);
            const arry = lightCount;
            arry.pop();
            setLightCount(arry);
            setActivePage(activePage + 1);
            pageHandle(activePage + 1);
          }
          return;
        }}
        boldCount={boldCount}
        lightCount={lightCount}
      />
    </View>
  );
};

export default PropertyManager;
