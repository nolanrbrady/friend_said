import Home from './app/ios/home';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

export default class friendsaid extends Component {
  render() {
    return (
      <NavigatorIOS
          navigationBarHidden={true}
          initialRoute={{title: "Home", component: Home }}
          style={{flex: 1}}/>
    );
  }
}

AppRegistry.registerComponent('friendsaid', () => friendsaid);
