import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//TouchableOpacity
//TouchableHighlight

export default class RandomNumber extends Component {
  static propTypes = {
    id:PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress:PropTypes.func.isRequired,


  };

  handlePress = () => {
    if(this.props.isDisabled) {return;}
    this.props.onPress(this.props.id)
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
    <Text style={[styles.random, this.props.isDisabled && styles.selected]}>{this.props.number}</Text>
      </TouchableOpacity>
    );
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
  selected:{
    opacity:0.3
  }
});
