// Index.android.js - Code goes in here for ANDROID

// Import a library to help create a component
import React from 'react';
//Just imports the text property in the react-native library
//Also import AppRegistry from react-native
import { Text, AppRegistry } from 'react-native';

//Create a component
//This is JSX not HTML
const App = () => (
    <Text>Hello World</Text>
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
