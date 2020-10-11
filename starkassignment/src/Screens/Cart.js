import React from 'react';

import {FlatList, View, Image, Text, SafeAreaView} from 'react-native';

import AppButton from '../Component/Button';

import ScreenStyles from '../Styles/ScreenStyles';

import { connect } from "react-redux";

import { addSelectedProduct,addUserDetails} from "../redux/actions/Action";

import { ScrollView } from 'react-native-gesture-handler';
 class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state={i:1}
  }

  FlatListItemSeparator = () => <View style={ScreenStyles.line} />;

  renderItem = (data) => 
  {
    console.log(JSON.stringify(data))
   return(
   
    <View
      style={[ScreenStyles.list, data.item.name.item.selectedClass]}
      >
      <Image
        source={{uri: data.item.name.item.thumbnailUrl}}
        style={{width: 40, height: 40, margin: 6}}
      />
      <Text style={ScreenStyles.lightText}>
        {' '}
        {data.item.name.item.title.charAt(0).toUpperCase() +
          data.item.name.item.title.slice(1)}{' '}
      </Text>

      <Text style={{flex:1,color:'white' , fontSize:30,fontWeight:'700'}} onPress={()=> this.setState({i:data.item.name.item.qty++})}>+</Text> 

      <Text style={{flex:1,color:'white' , fontSize:30,fontWeight:'700'}} onPress={()=> this.setState({i:data.item.name.item.qty--})}>-</Text> 


        <Text style={{flex:1,textAlign:'right',marginRight:15,color:'white', width:122}}>{'RS. ' +data.item.name.item.Price + ' X ' + this.state.i + ' = '}</Text>   
        
        <Text style={{flex:1,textAlign:'right',marginRight:15,color:'white'}}>{'RS. ' +data.item.name.item.Price * this.state.i }</Text>   
        
        

        </View>
  )
        };


  render() {
   
    console.log("Product List : " +   JSON.stringify(this.props.products))

    console.log(" Address1 : " +   JSON.stringify(this.props.products.address1))

    console.log(" Address 2: " +   JSON.stringify(this.props.products.address2))
    console.log(" Country : " +   JSON.stringify(this.props.products.country))
    console.log(" State : " +   JSON.stringify(this.props.products.state))
    console.log(" City : " +   JSON.stringify(this.props.products.city))
    

    return (
   
   < SafeAreaView style={ScreenStyles.MainContainer}>   
      <View style={ScreenStyles.MainContainer}>
        <FlatList
          data={this.props.products.SelectedProductItem}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
        
        />
     
      </View>
          <View>


           <Text> Address1 : { this.props.products.address1 }</Text>  
           <Text> Address2 : { this.props.products.address2 }</Text>  
           <Text> Country : { this.props.products.country }</Text>  
           <Text> State : { this.props.products.state }</Text>  
           <Text> City : { this.props.products.city }</Text>  
          
           <AppButton
            title="Place Order"
            onPress={() => alert('Placed Order Successfully...')}
          />
         </View>
     </SafeAreaView>

    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.Reducers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (key) => dispatch(addSelectedProduct(key))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);