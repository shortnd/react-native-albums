// Index.ios.js - place code here for IOS

//Import a library to create component
import React from 'react';

import { Text, AppRegistry } from 'react-native';

const App = () => (
  <Text>Hello World</Text>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
