// Index.android.js - Code goes in here for ANDROID

// Import a library to help create a component
import React from 'react';
//Just imports the text property in the react-native library
//Also import AppRegistry from react-native
import { AppRegistry } from 'react-native';
//Import the header
import Header from './src/components/header';

//Create a component
//This is JSX not HTML
const App = () => (
    //Rendering the imported component
    //This is a self closing tag because nothing is in it
    <Header headerText={'Albums!'} />
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
