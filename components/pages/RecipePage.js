import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {Header} from '../Header';
import {NavigationContainer} from '@react-navigation/native';

const RecipePage = ({navigation}) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = keyword => {
    const API = `https://api.edamam.com/search?q=${keyword}&app_id=bbd0ec31&app_key=9c0870aaa3cb69c2d6135078ccd73173`;
  };

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
      <Header text="Recipe Search" color={'#325288'} />
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
        onPress={() => navigation.navigate('Home')}>
        Back
      </Button>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={s.searchInput}
          onChangeText={setSearchInputValue}
          value={searchInputValue}
          placeholder={'Enter Dish'}
        />
        <IconButton
          icon="magnify"
          color={'#325288'}
          size={30}
          onPress={() => setSearched(true)}
        />
      </View>
      {searched && <Text style={s.h1}>{searchInputValue}</Text>}
    </View>
  );
};

export default RecipePage;
