import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from '../screens/contacts/Contacts';
import CreateContact from '../screens/contacts/CreateContact';
import ContactDetail from '../screens/contacts/ContactDetail';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={'Contacts'}>
      <HomeStack.Screen name={'Contacts'} component={Contacts} />
      <HomeStack.Screen name={'CreateContacts'} component={CreateContact} />
      <HomeStack.Screen name={'ContactDetail'} component={ContactDetail} />
      <HomeStack.Screen name={'Setting'} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
