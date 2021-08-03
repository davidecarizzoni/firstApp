import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';

const Login = props => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        value={value}
        onChangeText={text => onChangeText(text)}
        label={'Username'}
        icon={<Text> Icon</Text>}
        iconPosition={'right'}
        // error={'The field is required'}
      />
      <Input label={'Username'} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Login;
