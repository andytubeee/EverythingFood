import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export const HomeButton = ({text, color, icon, on_press}) => {
  return (
    <Button
      icon={icon}
      mode="contained"
      style={{margin: 20, borderRadius: 30}}
      labelStyle={{fontSize: 30, fontFamily: 'Antonio-Medium'}}
      contentStyle={{height: 100}}
      color={color}
      onPress={on_press}
      onLongPress={() => console.log('Long Pressed')}>
      {text}
    </Button>
  );
};
