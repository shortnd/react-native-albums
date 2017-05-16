// Index.ios.js - place code here for IOS

//Import a library to create component
import React from 'react';

import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
