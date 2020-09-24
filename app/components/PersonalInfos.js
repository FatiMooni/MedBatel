// Components/Avatar.js

import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

class PersonalInfos extends React.Component {
  constructor(props) {
    super(props);
    this._avatarClicked = this._avatarClicked.bind(this);
  }

  _avatarClicked() {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé");
      } else if (response.error) {
        console.log('Erreur : ', response.error);
      } else {
        console.log('Photo : ', response.uri);
        let requireSource = {uri: response.uri};
        // On crée une action avec l'image prise et on l'envoie au store Redux
        const action = {type: 'UPDATE_AVATAR', value: requireSource};
        this.props.dispatch(action);
      }
    });
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={this._avatarClicked}>
          {/* A présent on peut récupérer notre avatar dans les props. 
        Souvenez-vous Redux mappe notre state global 
        et ses données dans les props de notre component. */}
          <Image style={styles.avatar} source={this.props.image_uri} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: 18,
          }}>
          {this.props.username}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#4ecdc4',
          }}>
          {this.props.place}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#00000050',
            marginTop: 5,
          }}>
          {this.props.contact}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B50',
    borderWidth: 2,
  },
});

// On mappe l'avatar aux props de notre component
const mapStateToProps = (state) => {
  return {
    image_uri: state.manageProfile.uri,
    username: state.manageProfile.user,
    place: state.manageProfile.location,
    contact: state.manageProfile.contact,
  };
};

export default connect(mapStateToProps)(PersonalInfos);
