import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {TextBold} from '../../components/TextBold';
import {GREY_COLOR, PRIMARY_COLOR} from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
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
        <Text style={styles.subtitle}> Please login here </Text>
        <View>
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Username'}
            icon={<Text> Icon</Text>}
            iconPosition={'right'}
            placeholder={'Enter username'}
            // error={'The field is required'}
          />
          <Input
            value={value}
            onChangeText={text => onChangeText(text)}
            label={'Password'}
            iconPosition={'right'}
            placeholder={'Enter password'}
            secureTextEntry={true}
            // error={'The field is required'}
          />
          <Button title={'Submit'} disable={false} />
          <View style={styles.mainSection}>
            <Text style={{color: GREY_COLOR}}>Need a new account? </Text>
            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.linkButtonText}>Register</Text>
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

export default Login;
