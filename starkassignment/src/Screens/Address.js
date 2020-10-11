import React from 'react';

import {SafeAreaView, View} from 'react-native';

import { connect } from "react-redux";

import { addSelectedProduct,addUserDetails} from "../redux/actions/Action";

import AppButton from '../Component/Button';

import AppTextInput from '../Component/TextInput';

import ScreenStyles from '../Styles/ScreenStyles';
import { ScrollView } from 'react-native-gesture-handler';
 class Address extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       add1:'',
       add2:'',
       country:'',
       state:'',
       city:''
    };
  }

methodcall()
{
  const {add1,add2,country,state,city} = this.state

  this.props.add_address({address1:add1,address2:add2,country:country,state:state,city:city})
  this.props.navigation.navigate('Cart')
}


  render() {
    const {navigation} = this.props;

  //  console.log("Product List : " +   JSON.stringify(this.props.products))
    return (
      <ScrollView style={ScreenStyles.MainContainer}>
        
        <AppTextInput  
        multiline
        numberOfLines={4}
        onChangeText={text => this.setState({add1:text})}
        placeholder={'Address 1'}
        placeholderTextColor={'grey'}
        value={this.state.add1}
        height={80}
         ></AppTextInput>

        <AppTextInput  
          multiline
          numberOfLines={4}
          onChangeText={text => this.setState({add2:text})}
          placeholder={'Address 2'}
          placeholderTextColor={'grey'}
          height={80}
          value={this.state.add2}   
         ></AppTextInput>

         <AppTextInput  
          multiline = {false}
          numberOfLines={4}
          onChangeText={text => this.setState({country:text})}
          placeholder={'Country'}
          placeholderTextColor={'grey'}
          height={40}
          value={this.state.country}   
         ></AppTextInput>

        <AppTextInput  
          multiline = {false}
          numberOfLines={4}
          onChangeText={text => this.setState({state:text})}
          placeholder={'State'}
          placeholderTextColor={'grey'}
          height={40}
          value={this.state.state}   
         ></AppTextInput>

        <AppTextInput  
          multiline = {false}
          numberOfLines={4}
          onChangeText={text => this.setState({city:text})}
          placeholder={'City'}
          placeholderTextColor={'grey'}
          height={40}
          value={this.state.city}   
          ></AppTextInput>
 
        <AppButton title="Next" onPress={() => this.methodcall()} />
      </ScrollView>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    address: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_address: (key) => dispatch(addUserDetails(key))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);