import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
import {Dimensions} from 'react-native';

const App = () => {
  return (
    <GlobalProvider style={{height: Dimensions.get('window').height}}>
      <AppNavContainer />
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
