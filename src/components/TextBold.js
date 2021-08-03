import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const TextBold = ({children, style, ...res}) => {
  return (
    <Text {...res} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});
