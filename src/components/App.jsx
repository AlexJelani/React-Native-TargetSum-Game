import React from 'react';
import Game from './Game'
import 'react-native-devsettings';


class App extends React.Component {
  render() {
    return (
   <Game randomNumberCount={6}/>
    );
  }
}


export default App;
