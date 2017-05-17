// Index.ios.js - place code here for IOS

//Import a library to create component
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
  //headerText is 'Albums!' and is props for the header component
  <Header headerText={'Albums!'} />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
