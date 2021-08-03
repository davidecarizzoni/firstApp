import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {PRIMARY_COLOR} from '../../utils/theme';

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
      <Button secondary title={'Submit'} loading={true} />
      <Button title={'Submit'} loading={false} disable={false} />
      <Button title={'Submit'} loading={false} disable={false} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Login;
