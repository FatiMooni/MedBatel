import React, {Component} from 'react';
import {FlatList} from 'react-native';
import OfferItem from './OfferItem';
import data from '../helper/offersData';

class OfferList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
    };

    //this.setState(this.state, )
  }

  componentDidMount() {
    this.setState({
      offers: [...this.state.offers, ...data],
    });
  }
  render() {
    return (
      <FlatList
        data={this.state.offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <OfferItem offer={item} />}
      />
    );
  }
}

export default OfferList;
