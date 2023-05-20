import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

//TouchableOpacity
//TouchableHighlight

export default class RandomNumber extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
    }
  render() {
    return (
    <Text style={styles.random} >{this.props.number}</Text>

    )
  }
}
const styles = StyleSheet.create({

random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },

})