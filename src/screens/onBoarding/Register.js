import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';
import {TextBold} from '../../components/TextBold';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {GREY_COLOR, PRIMARY_COLOR} from '../../utils/theme';

const Register = props => {
  const [value, onChangeText] = useState('');
  const {navigate} = useNavigation();
  return (
    <Container>
      <View>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={{padding: 5}}>
        <TextBold style={styles.title}> Welcome to my first App</TextBold>
        <Text style={styles.subtitle}> Create a free account </Text>
        <View>
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Username'}
            placeholder={'Enter username'}
          />
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'First name'}
            placeholder={'Enter first name'}
          />
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Last name'}
            placeholder={'Enter last name'}
          />
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Email'}
            placeholder={'Enter email'}
          />
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Password'}
            icon={'Show'}
            iconPosition={'right'}
            placeholder={'Enter password'}
            secureTextEntry={true}
          />
          <Button title={'Submit'} disable={false} />
          <View style={styles.mainSection}>
            <Text style={{color: GREY_COLOR}}>Just have an account </Text>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={styles.linkButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    paddingVertical: 15,
  },
  subtitle: {
    alignSelf: 'center',
    paddingBottom: 15,
  },
  mainSection: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkButtonText: {
    fontSize: 16,
    color: PRIMARY_COLOR,
  },
});
export default Register;
