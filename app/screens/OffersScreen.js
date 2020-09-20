import React, {Component} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import OfferItem from '../components/OfferItem';
import OfferList from '../components/OfferList';
import {Chip} from 'react-native-paper';
import data from '../helper/categoriesData';

class OffersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: null,
    };
  }

  componentDidMount() {
    this.setState({
      categories: [...this.state.categories, ...data],
    });
  }

  selectThisCategory(item) {
    data.filter((el) => {
      el.category != item.title;
    });
    console.log(data);
    this.setState({
      selectedCategory: item.id,
    });
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
            selected={item.id === this.state.selectedCategory ? true : false}
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
        <Text>Screen Profile</Text>
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 5,
            marginHorizontal: 5,
          }}>
          {this._displayCategoriesList()}
        </ScrollView>
        <OfferList />
      </View>
    );
  }
}

export default OffersScreen;
