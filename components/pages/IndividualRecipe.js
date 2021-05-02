import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {Header} from '../Header';
import {NavigationContainer} from '@react-navigation/native';

const RecipePage = ({label, navigation}) => {
  const s = StyleSheet.create({
    searchInput: {
      borderWidth: 2,
      borderColor: '#325288',
      marginLeft: 10,
      marginRight: 0,
      borderRadius: 20,
      paddingLeft: 25,
      paddingRight: 15,
      fontFamily: 'Antonio-Regular',
      width: 350,
      fontSize: 20,
    },

    SearchBarContainer: {
      flexDirection: 'row',
      flex: 1,
    },

    h1: {
      fontFamily: 'Antonio-Regular',
      fontSize: 30,
      textAlign: 'center',
    },
  });

  return (
    <View>
      <Header text={label} color={'#325288'} />
      <Button
        mode={'contained'}
        color={'#325288'}
        icon="arrow-left-bold"
        style={{margin: 10, float: 'left', width: 50}}
        labelStyle={{
          fontSize: 10,
          fontFamily: 'Antonio-Medium',
          color: '#fff',
        }}
        onPress={() => navigation.navigate('RecipeSearch')}>
        Back
      </Button>
    </View>
  );
};

export default RecipePage;
