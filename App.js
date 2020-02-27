
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import * as myConstant from './src/common/constants';

import reducer from './reducer';
import Navigation from './Navigator'


const client = axios.create({
  baseURL: myConstant.API,
  responseType: 'json'
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
    marginTop: 50
  }
});