import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from './reducers'


import AddEntry from "./components/AddEntry";

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <AddEntry/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
