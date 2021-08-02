import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const isLoggedIn = true;
  const state = useContext(GlobalContext);

  console.log({state});

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
      {/*<DrawerNavigator />*/}
    </NavigationContainer>
  );
};

export default AppNavContainer;
