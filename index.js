<<<<<<< HEAD
/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native'; 


// 去掉模拟机底部的黄色警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => App);
=======
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('RNtest1', () => App);
>>>>>>> 613d124149ef8211d9cbb49813c7a67db40e35d8
