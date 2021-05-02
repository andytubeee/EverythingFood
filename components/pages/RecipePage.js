import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {Header} from '../Header';
import {NavigationContainer} from '@react-navigation/native';
import {RecipeCard} from '../RecipeCard';

const RecipePage = ({navigation}) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searched, setSearched] = useState(false);
  const [searchHits, setSearchHits] = useState([]);
  const [to, setTo] = useState(10);
  const [from, setFrom] = useState(0);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleSearch = async (keyword, From, To) => {
    const API = `https://api.edamam.com/search?q=${keyword}&from=${From}&to=${To}&app_id=bbd0ec31&app_key=9c0870aaa3cb69c2d6135078ccd73173`;
    return await fetch(API)
      .then(response => response.json())
      .then(data => (data.more ? data.hits : [-1]))
      .catch(err => [-69]);
  };

  const OnMorePress = () => {
    setTo(prev => (prev += 10));
    setFrom(prev => (prev += 10));
    handleSearch(searchInputValue, from, to).then(res => setSearchHits(res));
  };

  const OnFewPress = () => {};

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
        style={{margin: 10, float: 'left', width: windowWidth / 10}}
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
          placeholder={'Search'}
        />
        <IconButton
          icon="magnify"
          color={'#325288'}
          size={30}
          onPress={() =>
            handleSearch(searchInputValue, from, to).then(res => {
              setSearchHits(res);
            })
          }
        />
      </View>
      {Array.from(searchHits).length > 0 &&
        (Array.from(searchHits) !== [-1] ? (
          <>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                mode={'contained'}
                color={'#325288'}
                icon="arrow-left-bold"
                disabled={from === 0}
                style={{
                  width: windowWidth / 10,
                  margin: 10,
                  alignSelf: 'flex-end',
                }}
                labelStyle={{
                  fontSize: 10,
                  fontFamily: 'Antonio-Medium',
                  color: '#fff',
                }}>
                Fewer
              </Button>
              <Button
                mode={'contained'}
                color={'#325288'}
                icon="arrow-right-bold"
                style={{
                  width: windowWidth / 10,
                  margin: 10,
                  marginLeft: 'auto',
                }}
                labelStyle={{
                  fontSize: 10,
                  fontFamily: 'Antonio-Medium',
                  color: '#fff',
                }}
                onPress={OnMorePress}>
                More
              </Button>
            </View>
            <FlatList
              data={searchHits}
              renderItem={({item}) => <RecipeCard recipe={item} />}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                alignItems: 'center',
                paddingTop: 20,
                paddingBottom: windowHeight / 2.5,
              }}
            />
          </>
        ) : (
          <Text>None</Text>
        ))}
    </View>
  );
};

export default RecipePage;
