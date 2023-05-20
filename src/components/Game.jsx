import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

class Game extends React.Component {
    target = 10 + Math.floor(40 * Math.random());
  render() {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.target}>{this.target}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white', // Set the background color of the safe area if needed
    },
    container: {
      backgroundColor: "#ddd",
      flex: 1,
    },
    target: {
      fontSize: 40,
      backgroundColor: '#aaa',
      marginHorizontal: 50,
      textAlign: 'center',
    },
  });

export default Game;