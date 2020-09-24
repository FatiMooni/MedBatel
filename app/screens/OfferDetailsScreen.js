import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {TouchableHighlight} from 'react-native-gesture-handler';

class OfferDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {offer} = this.props.route.params;
    console.log(offer);
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableHighlight
          style={{elevation: 15, height: 300, width: '100%', zIndex: 15}}>
          <Image source={{uri: offer.url}} style={styles.offerImg} />
        </TouchableHighlight>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Text style={styles.offerTitleText} lineBreakMode="tail">
            {offer.offer_title}
          </Text>
          <Text style={styles.offerCategoryText}>{offer.category}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexDirection: 'row',
            marginHorizontal: 7,
          }}>
          <View style={styles.datePlaceContainer}>
            <FontAwesomeIcon
              name={'map-marker'}
              size={18}
              color={'black'}
              style={{alignSelf: 'center', marginHorizontal: 7}}
            />
            <Text style={styles.offerPlaceText}>{offer.place}</Text>
          </View>
          <View style={styles.datePlaceContainer}>
            <FontAwesomeIcon
              name={'calendar'}
              size={18}
              color={'black'}
              style={{alignSelf: 'center', marginHorizontal: 7}}
            />
            <Text style={styles.offerPlaceText}>27-08-2020</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offerImg: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    borderBottomRightRadius: 50,
  },
  offerTitleText: {
    margin: 7,
    fontSize: 24,
    fontWeight: '700',
  },
  offerCategoryText: {
    fontSize: 13,
    backgroundColor: '#4ECDC4',
    borderRadius: 7,
    color: 'white',
    marginBottom: 2,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    marginVertical: 17,
    marginHorizontal: 7,
  },
  datePlaceContainer: {
    flexDirection: 'row',
  },
});

export default OfferDetailsScreen;
