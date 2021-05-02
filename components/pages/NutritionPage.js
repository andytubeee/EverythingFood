import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../Header';
import {Button} from 'react-native-paper';

const NutritionPage = ({navigation}) => {
  return (
    <View>
      <Header text="Nutrition Analysis" color={'#114e60'} />
      <Button
        mode={'contained'}
        color={'#114e60'}
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

export default NutritionPage;
