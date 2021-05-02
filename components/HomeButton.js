import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export const HomeButton = ({text, color, icon}) => {
  return (
    <Button
      icon={icon}
      mode="contained"
      style={{margin: 20, borderRadius: 30}}
      labelStyle={{fontSize: 30, fontFamily: 'Antonio-Medium'}}
      contentStyle={{height: 100}}
      color={color}
      onPress={() => console.log(`Pressed ${text}`)}
      onLongPress={() => console.log('Long Pressed')}>
      {text}
    </Button>
  );
};
