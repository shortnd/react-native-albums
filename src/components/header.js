// Import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
  //brings in the style to the component
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//Header Styles
const styles = {
  //For the view
  viewStyle: {
    backgroundColor: '#F8F8F8',
    //Already flexbox so just have to move with
    //justifyContent and alignItems
    justifyContent: 'center',
    alignItems: 'center',
    //Set the height of the header to 60
    height: 60,
    //Gave it paddingTop of 15
    paddingTop: 15,
    //Creating border with a shadow
    shadowColor: '#000',
    //Width means left/right hight is up/down
    shadowOffset: { width: 0, height: 2 },
    //Changes how hard the color is between 0-1
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  //For the text
  textStyle: {
    fontSize: 20
  }
};

//Make the component avaliable to other parts of the app
//For every child componet
export default Header;
