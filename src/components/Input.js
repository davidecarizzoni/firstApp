import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {DANGER_COLOR, GREY_COLOR, PRIMARY_COLOR} from '../utils/theme';

const Input = ({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const getFlexDirection = () => {
    return icon && iconPosition
      ? iconPosition === 'left'
        ? 'row'
        : 'row-reverse'
      : 'row';
  };
  const getBorderColor = () => {
    return focus ? PRIMARY_COLOR : error ? DANGER_COLOR : GREY_COLOR;
  };
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {label && <Text> {label}</Text>}
      <View
        style={[
          styles.inputBox,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && <Text> {icon}</Text>}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}> {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
  inputBox: {
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    // flexDirection: 'row',
    marginTop: 2,
    // alignItems: 'center',
    paddingHorizontal: 5,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  error: {
    color: DANGER_COLOR,
    paddingTop: 4,
  },
});

export default Input;
