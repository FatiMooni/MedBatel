import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import {
  TextInput,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, connect} from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fc5c65',
  },
  roundness: 10,
  background: 'white',
};

class AddOfferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {img_url: null, title: null, place: null, category: null};
    this._selectPicture = this._selectPicture.bind(this);
  }

  _resetFields() {
    this.setState({
      img_url: null,
      title: null,
      place: null,
      category: null,
    });
  }

  _addOffer() {
    const offer = {
      id: 6,
      url: this.state.img_url,
      offer_title: this.state.title,
      place: this.state.place,
      category: this.state.category,
    };

    console.log(offer);

    let action = {type: 'ADD_OFFER', value: offer};
    this.props.dispatch(action);

    setTimeout(() => {
      this.props.navigation.navigate('My offers', {offer: offer});
    }, 1000);

    this._resetFields();
  }

  _selectPicture() {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User has declained the import');
      } else if (response.error) {
        console.log('Error : ', response.error);
      } else {
        console.log('Photo : ', response.uri);
        let requireSource = {uri: response.uri};

        this.setState({
          img_url: requireSource,
        });
      }
    });
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={styles.image_container}
            onPress={this._selectPicture}>
            <Image
              style={this.state.img_url ? styles.image : styles.image_def}
              source={
                this.state.img_url
                  ? this.state.img_url
                  : require('../images/photo.png')
              }
            />
            {!this.state.img_url && (
              <Text style={{color: 'gray'}}>Add a picture for your offer</Text>
            )}
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            mode="outlined"
            selectionColor="#fc5c65"
            onChangeText={(text) => this.setState({title: text})}
            placeholder="Enter a title for your offer"
            placeholderTextColor="gray"
            label="Offer title"
            inlineImageLeft="username"
            inlineImagePadding={2}
            value={this.state.title}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            selectionColor="#fc5c65"
            onTouchStart={() => Alert.alert('hey hey hey')}
            onChangeText={(text) => this.setState({place: text})}
            placeholder="Choose a localisation"
            placeholderTextColor="gray"
            label="Localisation"
            value={this.state.place}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            selectionColor="#fc5c65"
            onChangeText={(text) => this.setState({category: text})}
            placeholder="Choose a category"
            placeholderTextColor="gray"
            label="Category"
            value={this.state.category}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            selectionColor="#fc5c65"
            onChangeText={(text) => this.setState({text})}
            placeholder="Add a description"
            placeholderTextColor="gray"
            label="Description"
            numberOfLines={5}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 25,
              alignSelf: 'stretch',
            }}>
            <TouchableOpacity
              onPress={() => this._resetFields()}
              style={{paddingVertical: 10, paddingHorizontal: 12}}>
              <Text
                style={{
                  color: '#fc5c6595',
                  fontSize: 15,
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}>
                Reset
              </Text>
            </TouchableOpacity>
            <DoneButton onPress={() => this._addOffer()} title="Create offer" />
          </View>
        </ScrollView>
      </PaperProvider>
    );
  }
}

//custom button
const DoneButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.doneButtonContainer}>
    <Text style={styles.doneButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 15,
    marginTop: 5,
  },
  image_container: {
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#4ECDC455',
    backgroundColor: '#00000010',
    borderWidth: 1.5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  image_def: {
    height: 100,
    width: 100,
  },
  image: {
    height: '100%',
    marginHorizontal: 5,
    marginVertical: 5,
    width: '100%',
    borderRadius: 10,
  },

  doneButtonContainer: {
    elevation: 5,
    backgroundColor: '#4ECDC4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  doneButtonText: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
const mapStatetoProps = (state) => {
  return state.manageOffers;
};
export default connect(mapStatetoProps)(AddOfferScreen);
