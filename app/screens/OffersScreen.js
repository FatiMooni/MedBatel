import React, {Component} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import OfferItem from '../components/OfferItem';
import OfferList from '../components/OfferList';
import {Chip} from 'react-native-paper';
import data from '../helper/categoriesData';
import {offers} from '../helper/offersData';

class OffersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      offers: [],
      selectedCategory: null,
    };
  }

  componentDidMount() {
    this.setState({
      categories: [...this.state.categories, ...data],
      offers: [...this.state.offers, ...offers],
    });
  }

  selectThisCategory(item) {
    this.setState(
      {
        selectedCategory: item,
      },
      () => {
        this._loadOffers();
      },
    );
  }

  _loadOffers() {
    if (this.state.selectedCategory.title === 'All') {
      this.setState({offers: offers});
      return;
    }
    //in future it will include a back end call
    let items = offers.filter(
      (el) => el.category === this.state.selectedCategory.title,
    );
    this.setState({offers: items});
    console.log(items);
  }

  _displayCategoriesList() {
    return this.state.categories.map((item, index) => {
      return (
        <View
          style={{
            marginTop: 5,
            flexWrap: 'wrap',
            marginHorizontal: 2,
            marginBottom: 7,
          }}>
          <Chip
            key={index}
            textStyle={{color: 'black', fontSize: 12}} //label properties
            onDelete={() => {}}
            style={{backgroundColor: '#4ECDC415'}}
            selectedColor="#fc5c65"
            selected={
              item.id === this.state.selectedCategory?.id ? true : false
            }
            onPress={() => this.selectThisCategory(item)}>
            {item.title}
          </Chip>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginHorizontal: 5,
          }}>
          {this._displayCategoriesList()}
        </ScrollView>
        <OfferList offers={this.state.offers} />
      </View>
    );
  }
}

export default OffersScreen;
