/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ButtonStyles from '../Styles/ButtonStyles';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={ButtonStyles.appTouch}>
    <LinearGradient
      colors={['#ff80df', '#800060']}
      style={ButtonStyles.appButtonContainer}>
      <Text style={ButtonStyles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default AppButton;
