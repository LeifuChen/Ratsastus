/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView
} from 'react-native';

class Ratsastus extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://ratsastus-server.herokuapp.com/'}}
      />
    );
  }
}

AppRegistry.registerComponent('Ratsastus', () => Ratsastus);
