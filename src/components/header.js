// Import library for making a component
import React from 'react';
import { Text } from 'react-native';

//Make a component
const Header = () => {
  //brings in the style to the component
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums</Text>;
};

//Header Styles
const styles = {
  textStyle: {
    fontSize: 20
  }
};

//Make the component avaliable to other parts of the app
//For every child componet
export default Header;
