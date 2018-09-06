/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native'; 


// 去掉模拟机底部的黄色警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => App);
