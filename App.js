/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import * as myConstant from './src/common/constants';

import reducer from './src/reducer/reducer';
import Navigation from './src/common/navigator';


const client = axios.create({
  baseURL: myConstant.API,
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
