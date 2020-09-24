import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import OfferList from '../components/OfferList';
import {connect} from 'react-redux';

class MyOffersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.offers?.length);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <OfferList
          offers={this.props.offers}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    offers: state.manageOffers.offers,
  };
};

export default connect(mapStateToProp)(MyOffersScreen);
