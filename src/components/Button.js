import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextBold} from './TextBold';
import {
  GREY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  STANDARD_WHITE,
} from '../utils/theme';

const Button = ({secondary, style, title, loading, disable, ...props}) => {
  const getBgColor = () => {
    return disable ? GREY_COLOR : secondary ? SECONDARY_COLOR : PRIMARY_COLOR;
  };

  return (
    <TouchableOpacity
      disabled={disable}
      style={[{backgroundColor: getBgColor()}, styles.button]}>
      <View style={styles.loader}>
        {loading && !disable && (
          <ActivityIndicator
            color={secondary ? PRIMARY_COLOR : STANDARD_WHITE}
          />
        )}
      </View>
      <TextBold
        style={[
          styles.buttonText,
          {color: disable ? 'black' : STANDARD_WHITE},
        ]}>
        {' '}
        {title}
      </TextBold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
    flexDirection: 'row',
    width: '100%',
  },
  loader: {
    paddingLeft: 3,
  },
  buttonText: {
    color: STANDARD_WHITE,
    textTransform: 'uppercase',
  },
});

export default Button;
