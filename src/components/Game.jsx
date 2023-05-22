import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber';
import shuffle from 'lodash.shuffle'

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired
  };
  state = {
    selectedIds: [],
    remainingSeconds: this.props.initialSeconds 
  };
  gameStatus = 'PLAYING';
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

    shuffledRandomNumbers = shuffle(this.randomNumbers);

    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          remainingSeconds: prevState.remainingSeconds - 1
        }), () => {
          if (this.state.remainingSeconds === 0) {
            clearInterval(this.intervalId);
          }
        });
      }, 1000);
    }
    
componentWillUnmount() {
  clearInterval(this.intervalId);
}

  isNumberSelected = numberIndex => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };
  selectedIds = numberIndex => {
    this.setState(prevState => ({
      selectedIds: [...prevState.selectedIds, numberIndex],
    }));
  };
  componentWillUpdate(nextProps, nextState) {
    if (nextState.selectedIds !== this.state.selectedIds || nextState.remainingSeconds === 0) {
      const gameStatus = this.calcGameStatus(nextState);
      this.setState({ gameStatus }, () => {
        if (gameStatus !== 'PLAYING') {
          clearInterval(this.intervalId);
        }
      });
    }
  }
  
  //gameStatus: Playing, won, lost
  calcGameStatus = (nextState) => {
    const sumSelected = nextState.state.selectedIds.reduce((acc, curr) => {
      return acc + this.shuffledRandomNumbers[curr];
    }, 0);
    if(this.nextState.remainingSeconds === 0){
      return 'LOST';
    }
    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
  };

  render() {
    const gameStatus = this.gameStatus;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
            {this.target}
          </Text>
          <View style={styles.randomContainer}>
            {this.shuffledRandomNumbers.map((randomNumber, index) => (
              <RandomNumber
                key={index}
                id={index}
                number={randomNumber}
                isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                onPress={this.selectedIds}
              />
            ))}
          </View>
          <Text>{this.state.remainingSeconds}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  target: {
    fontSize: 40,
    margin: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
