// Import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = () => {
  //brings in the style to the component
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

//Header Styles
const styles = {
  //For the view
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  //For the text
  textStyle: {
    fontSize: 20
  }
};

//Make the component avaliable to other parts of the app
//For every child componet
export default Header;
