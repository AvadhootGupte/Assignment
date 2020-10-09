import React from 'react';

import {SafeAreaView} from 'react-native';

import AppButton from '../Component/Button';

import ScreenStyles from '../Styles/ScreenStyles';

export default class Cart extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={ScreenStyles.MainContainer}>
        <AppButton
          title="Place Order"
          onPress={() => alert('Placed Order Successfully...')}
        />
      </SafeAreaView>
    );
  }
}
