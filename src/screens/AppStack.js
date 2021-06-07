import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SelectionScreen from './SelectionScreen';
import PropertyManager from './Walkthrough/PropertyManager';
import Tenant from './Walkthrough/Tenant';

const stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="SelectionScreen">
        <stack.Screen
          name="SelectionScreen"
          component={SelectionScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="PropertyManager"
          component={PropertyManager}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Tenant"
          component={Tenant}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import SelectionScreen from './SelectionScreen';
// import PropertyManager from './Walkthrough/PropertyManager';
// import Tenant from './Walkthrough/Tenant';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useThemeContext} from '../../providers/ThemeProvider';
// const Stack = createNativeStackNavigator();
// function RootNavigator(): React.ReactElement {
//   const {theme} = useThemeContext();
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: theme.background,
//         },
//         headerTitleStyle: {color: theme.fontColor},
//         headerTintColor: theme.tintColor,
//       }}>
//       <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
//       <Stack.Screen name="PropertyManager" component={PropertyManager} />
//       <Stack.Screen name="Tenant" component={Tenant} />
//     </Stack.Navigator>
//   );
// }
// export default RootNavigator;
