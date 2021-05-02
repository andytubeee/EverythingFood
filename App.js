import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './components/Header';
import {HomeButton} from './components/HomeButton';
import Home from './components/pages/Home';
import Navigator from './components/RouterStack';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return <Navigator />;
};

export default App;
