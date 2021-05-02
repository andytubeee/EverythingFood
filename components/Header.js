import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = ({text, color}) => {
  const s = StyleSheet.create({
    header: {
      fontSize: 35,
      color: '#fff',
      backgroundColor: color,
      fontFamily: 'Antonio-Bold',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
  });
  return (
    <View>
      <Text style={s.header}>{text}</Text>
    </View>
  );
};
