import React from 'react';
import {Image, Text, TouchableHighlight, Dimensions, View} from 'react-native';

export const RecipeCard = ({recipe}) => {
  const windowWidth = Dimensions.get('window').width;
  const {
    recipe: {image, label},
  } = recipe;
  return (
    <TouchableHighlight
      style={{width: windowWidth / 2.5, margin: 10}}
      onPress={() => alert(`Pressed on ${label}`)}>
      <View>
        <Image
          source={{uri: image}}
          style={{
            width: windowWidth / 3,
            height: windowWidth / 3,
            borderRadius: 20,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'Antonio-Regular',
          }}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
