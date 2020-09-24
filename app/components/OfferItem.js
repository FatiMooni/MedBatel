import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class OfferItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {offer, _displayDetailsOfOffer} = this.props;
    return (
      <TouchableOpacity
        style={Styles.item_container}
        onPress={() => {
          _displayDetailsOfOffer(offer);
        }}>
        <Image style={Styles.image} source={{uri: offer.url}} />
        <View style={Styles.content}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {offer.offer_title}
          </Text>
          <View style={Styles.category}>
            <Text style={Styles.category_type}> {offer.category} </Text>
          </View>
          <View style={Styles.location}>
            <Image
              source={require('../images/pin.png')}
              style={{
                width: 16,
                height: 16,
                borderColor: 'red',
                opacity: 0.7,
                marginTop: 2,
              }}
            />
            <Text style={{color: 'gray', fontSize: 14}}> {offer.place}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const Styles = StyleSheet.create({
  item_container: {
    margin: 7,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowOffset: {width: 2, height: 5},
    shadowColor: 'gray',
  },
  image: {
    width: 100,
    height: 120,
    backgroundColor: '#fc5c65',
    borderRadius: 5,
  },
  content: {
    margin: 5,
  },
  location: {
    flexDirection: 'row',
  },
  category: {
    flexDirection: 'row',
  },
  category_type: {
    fontSize: 10,
    backgroundColor: '#4ECDC4',
    borderRadius: 5,
    color: 'white',
    marginBottom: 2,
  },
});

export default OfferItem;
