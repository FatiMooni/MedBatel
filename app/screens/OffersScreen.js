import React, {Component} from 'react';
import {Text, View} from 'react-native';
import OfferItem from '../components/OfferItem';
import OfferList from '../components/OfferList';

class OffersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{}}>
        <Text>Screen Profile</Text>
        <OfferList />
      </View>
    );
  }
}

export default OffersScreen;
