/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SelectionScreen from './src/screens/SelectionScreen/index';
import {name as appName} from './app.json';
import Tenant from './src/screens/Walkthrough/Tenant/index';
import PropertyManager from './src/screens/Walkthrough/PropertyManager/index';
import AppStack from './src/screens/AppStack';
AppRegistry.registerComponent(appName, () => AppStack);
