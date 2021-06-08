import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {IMAGE} from '../../../assets/images';
import Footer from '../../../components/Footer/index';
import {styles} from './styles';
import Page from '../../../components/Pages/pages';

const Tenant = () => {
  const pagerRef = useRef(null);
  const [boldCount, setBoldCount] = useState([0]);
  const [lightCount, setLightCount] = useState([0, 1, 2]);
  const [activePage, setActivePage] = useState(0);
  const pageHandle = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backView}>
        <PagerView
          initialPage={0}
          scrollEnabled={false}
          ref={pagerRef}
          style={styles.pageView}>
          <View key="1" style={styles.viewFooter}>
            <Page
              title="CONNECT BANK ACCOUNT"
              secondaryText="Connect your bank account under ‘Settings’ to enable payment agreements between you and your landlord."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="2">
            <Page
              title="ACCEPTING LEASE AGREEMENT"
              secondaryText="Once your landlord sends you the details, you will have a chance to approve the payment agreement under the Properties tab."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="3">
            <Page
              title="TRACK PAYMENTS"
              secondaryText="All of your transactions between you
            and your landlord are recorded here under Payments."
              image={IMAGE.MOBILE1}
            />
          </View>
          <View key="4">
            <Page
              title="TRACK MAINTENANCE TASKS"
              secondaryText="See the tasks that are currently happening in your home under the Tasks tab."
              image={IMAGE.MOBILE1}
            />
          </View>
        </PagerView>
      </View>
      <Footer
        rightButtonLabel="NEXT"
        rightButtonPress={() => {
          if (boldCount.length <= 3) {
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

export default Tenant;
