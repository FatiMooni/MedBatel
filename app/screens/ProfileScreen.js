import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import PersonalInfos from '../components/PersonalInfos';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Indicator from '../components/Indicator';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: '30%', backgroundColor: '#fc5c65'}}>
          <View style={styles.info_container}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginBottom: -25,
                marginTop: 10,
                marginHorizontal: 10,
              }}>
              <FontAwesomeIcon name={'edit'} size={25} color={'black'} />
            </TouchableOpacity>

            <PersonalInfos />
          </View>
        </View>
        <View
          style={{
            height: '70%',
            backgroundColor: 'white',
            zIndex: -5,
            paddingTop: 70,
            paddingHorizontal: 20,
          }}>
          <View style={styles.indicatorContainer}>
            <Indicator
              indicator_level={30}
              indicator_title={'Given Offers'}
              image_uri={require('../images/gift-card.png')}
            />
            <Indicator
              indicator_level={30}
              indicator_title={'Picked Offers'}
              image_uri={require('../images/care.png')}
            />
          </View>
          <CustomButton
            onPress={() => {}}
            title={'My current offers'}
            iconName={'list'}
          />
          <CustomButton
            onPress={() => {}}
            title={'Offers history'}
            iconName={'history'}
          />
          <CustomButton
            onPress={() => {}}
            title={'Offers to pick'}
            iconName={'check'}
          />
        </View>
      </ScrollView>
    );
  }
}

//custom button
const CustomButton = ({onPress, title, iconName}) => (
  <TouchableOpacity onPress={onPress} style={styles.doneButtonContainer}>
    <View style={styles.doneIconContainer}>
      <FontAwesomeIcon
        name={iconName}
        size={25}
        color={'white'}
        style={{alignSelf: 'center'}}
      />
    </View>
    <Text style={styles.doneButtonText}>{title}</Text>
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
  doneButtonContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },

  doneButtonText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  doneIconContainer: {
    backgroundColor: '#4cdec4',
    height: 45,
    width: 45,
    elevation: 5,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 7,
  },
  indicatorContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default ProfileScreen;
