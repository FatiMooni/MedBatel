// Components/Avatar.js

import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';

class Indicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.avatar} source={this.props.image_uri} />
        <Text
          style={{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: 28,
          }}>
          {this.props.indicator_level}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'gray',
          }}>
          {this.props.indicator_title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
});

export default Indicator;
