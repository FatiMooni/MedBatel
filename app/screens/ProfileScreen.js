import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import PersonalInfos from '../components/PersonalInfos';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: '30%', backgroundColor: '#fc5c65'}}>
          <View style={styles.info_container}>
            <PersonalInfos />
          </View>
        </View>
        <View
          style={{
            height: '70%',
            backgroundColor: 'white',
            zIndex: -5,
            paddingTop: 100,
            paddingHorizontal: 20,
          }}>
          <CustomButton onPress={() => {}} title={'My offers'} />
        </View>
      </View>
    );
  }
}

//custom button
const CustomButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.doneButtonContainer}>
    <Text style={(styles.doneButtonText, {color: 'red'})}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  info_container: {
    elevation: 10,
    backgroundColor: '#fff',
    height: 200,
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 20,
    marginBottom: 30,
  },
});
export default ProfileScreen;
