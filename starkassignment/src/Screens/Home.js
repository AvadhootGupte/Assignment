import React from 'react';

import {SafeAreaView} from 'react-native';

import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from "react-redux";

import { addSelectedProduct } from "../redux/actions/Action";

import AppButton from '../Component/Button';

import {fetchData} from '../Services/Services';

import ScreenStyles from '../Styles/ScreenStyles';

 class Home extends React.Component {  
    
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
    };
  }

  componentDidMount() {
    let i = 1;
    fetchData().then((res) => {
      res = res.map((item) => {
        item.isSelect = false;
        item.selectedClass = ScreenStyles.list;
        item.Price = 50;
        item.title = 'Product-' + i++;
        return item;
      });
      this.setState({
        loading: false,
        dataSource: res,
      });
    })
  }

  FlatListItemSeparator = () => <View style={ScreenStyles.line} />;

  selectItem = (data) => {

    this.props.add(data) 

    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? ScreenStyles.selected
      : ScreenStyles.list;

    const index = this.state.dataSource.findIndex(
      (item) => data.item.id === item.id,
    );

    this.state.dataSource[index] = data.item;

    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  renderItem = (data) => (
    <TouchableOpacity
      style={[ScreenStyles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}>
      <Image
        source={{uri: data.item.thumbnailUrl}}
        style={{width: 40, height: 40, margin: 6}}
      />
      <Text style={ScreenStyles.lightText}>
        {' '}
        {data.item.title.charAt(0).toUpperCase() +
          data.item.title.slice(1)}{' '}
      </Text>

        <Text style={{flex:1,textAlign:'right',marginRight:15,color:'white'}}>{'RS. ' +data.item.Price}</Text>    
    </TouchableOpacity>
  );

  render() {
    const {navigation} = this.props;

    if (this.state.loading) {
      return (
        <View style={ScreenStyles.loader}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }

    return (
    <SafeAreaView style={ScreenStyles.MainContainer}>
      <View style={ScreenStyles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          extraData={this.state}
        />

         
      </View>
          <View>
           <AppButton
            title="Next"
            onPress={() => navigation.navigate('Address')}
          />
         </View>
     </SafeAreaView>

     );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {

    products: state
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
)(Home);