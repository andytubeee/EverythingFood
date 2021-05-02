import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Header} from '../Header';
import {NavigationContainer} from '@react-navigation/native';

const RecipePage = ({navigation}) => {
  return (
    <View>
      <Header text="Recipe Search" color={'#12c471'} />
      <Button
        mode={'contained'}
        color={'#12c471'}
        icon="arrow-left-bold"
        style={{margin: 10, float: 'left', width: 20}}
        labelStyle={{
          fontSize: 10,
          fontFamily: 'Antonio-Medium',
          color: '#fff',
        }}
        onPress={() => navigation.navigate('Home')}>
        Back
      </Button>
    </View>
  );
};

export default RecipePage;
