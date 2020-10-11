import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView,Keyboard } from 'react-native';

const AppTextInput = (props) => {
  return (
    
    <View>
   <KeyboardAvoidingView style={{margin:10,borderColor:'black',borderRadius:5,borderWidth:0.5,height:props.height}}> 
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      style={{fontSize:20,textAlign:'justify',marginLeft:5}}
      maxLength={80}
      onKeyPress = {(e)=>{
        if (e.nativeEvent.key === 'Enter') {
          Keyboard.dismiss();
        }
      }}
    />
 </KeyboardAvoidingView>
 </View>
  
  );
}
export default AppTextInput;