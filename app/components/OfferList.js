import React, {Component} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import OfferItem from './OfferItem';

class OfferList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.offers?.length);
  }

  _renderEmptyContainer() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 650,
          backgroundColor: 'white',
        }}>
        <Image
          style={{width: 100, height: 100, opacity: 0.7, marginBottom: 7}}
          source={require('../images/gift-card.png')}
        />
        <Text style={{fontWeight: '600'}}>No offer for this category</Text>
        <Text style={{fontSize: 12, color: 'darkgray'}}>
          Try to select a different category.
        </Text>
      </View>
    );
  }

  _displayDetailsOfOffer = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <View style={{flex: 99}}>
        <FlatList
          style={{}}
          data={this.props.offers}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={this._renderEmptyContainer()}
          renderItem={({item}) => (
            <OfferItem
              offer={item}
              _displayDetailsOfOffer={this._displayDetailsOfOffer}
            />
          )}
        />
      </View>
    );
  }
}

export default OfferList;
