import React from 'react';

import {SafeAreaView} from 'react-native';

import AppButton from '../Component/Button';

import AppTextInput from '../Component/TextInput';

import ScreenStyles from '../Styles/ScreenStyles';

export default class Address extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       add1:'',
       add2:'',
    };
  }


  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={ScreenStyles.MainContainer}>

        <AppTextInput  
        multiline
        numberOfLines={4}
        onChangeText={text => this.setState({add1:text})}
        placeholder={'Address 1'}
        placeholderTextColor={'grey'}
        value={this.state.add1}
        
         ></AppTextInput>
 
        <AppButton title="Next" onPress={() => navigation.navigate('Cart')} />
      </SafeAreaView>
    );
  }
}
