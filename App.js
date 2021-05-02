import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './components/Header';
import {HomeButton} from './components/HomeButton';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={s.container}>
      <Header text="Everything Food" color={'#12c471'} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <HomeButton
            text={'Search Recipes'}
            color={'#325288'}
            icon={'book-alphabet'}
          />
          <HomeButton
            text={'Nutrition Analysis'}
            color={'#114e60'}
            icon={'magnify'}
          />
        </View>
        <Text style={{textAlign: 'center', fontFamily: 'Antonio-Thin'}}>
          &copy; {new Date().getFullYear()} Everything Food - Powered by Edamam
        </Text>
      </View>
    </View>
  );
};

export default App;
