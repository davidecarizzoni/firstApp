import {Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/onBoarding/Login';
import Register from '../screens/onBoarding/Register';
const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={'Login'}>
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Register'} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
