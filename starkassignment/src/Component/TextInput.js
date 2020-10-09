import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, } from 'react-native';

const AppTextInput = (props) => {
  return (
   <View style={{margin:10,borderColor:'black',borderRadius:5,borderWidth:1,height:80}}>  
   <KeyboardAvoidingView> 
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={80}
    />
</KeyboardAvoidingView>
  </View> 
  );
}
export default AppTextInput;