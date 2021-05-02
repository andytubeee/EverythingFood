import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {Header} from '../Header';
import {NavigationContainer} from '@react-navigation/native';
import {RecipeCard} from '../RecipeCard';

const RecipePage = ({navigation}) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searched, setSearched] = useState(false);
  const [searchHits, setSearchHits] = useState([]);

  const windowWidth = Dimensions.get('window').width;

  const handleSearch = async keyword => {
    const API = `https://api.edamam.com/search?q=${keyword}&app_id=bbd0ec31&app_key=9c0870aaa3cb69c2d6135078ccd73173`;
    return await fetch(API)
      .then(response => response.json())
      .then(data => data.hits)
      .catch(err => [-1]);
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
      width: windowWidth / 1.2,
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
          onPress={() =>
            handleSearch(searchInputValue).then(res => setSearchHits(res))
          }
        />
      </View>
      {Array.from(searchHits).length > 0 && (
        <FlatList
          data={searchHits}
          renderItem={({item}) => <RecipeCard recipe={item} />}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            paddingVertical: 20,
          }}
        />
      )}
    </View>
  );
};

export default RecipePage;
