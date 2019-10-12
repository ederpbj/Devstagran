import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = StackNavigator({
  Preload: {
    screen: Preload,
  },
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
