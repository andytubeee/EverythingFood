import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../Header';
import {HomeButton} from '../HomeButton';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({navigation}) => {
  return (
    <View style={s.container}>
      <Header text="Everything Food" color={'#12c471'} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <HomeButton
            text={'Search Recipes'}
            color={'#325288'}
            icon={'book-alphabet'}
            on_press={() => navigation.navigate('RecipeSearch')}
          />
          <HomeButton
            text={'Nutrition Analysis'}
            color={'#114e60'}
            icon={'magnify'}
            on_press={() => navigation.navigate('NutritionPage')}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Antonio-Thin',
            marginBottom: 10,
          }}>
          &copy; {new Date().getFullYear()} Everything Food - Powered by Edamam
        </Text>
      </View>
    </View>
  );
};

export default Home;
