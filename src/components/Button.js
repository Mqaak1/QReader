import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles, { colors }  from '../config/styles';

const Button = (props) => {
    const {title, titleColor, buttonColor, style} = props;
    return (
      <TouchableOpacity {...props} style={[styles.common.buttonContainer, {backgroundColor:buttonColor}, style]}>
        <Text style={[styles.common.buttonTitle, {color:titleColor}]}>{title}</Text>
      </TouchableOpacity>
    );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  titleColor: PropTypes.string,
  buttonColor: PropTypes.string
};

Button.defaultProps = {
  style: {},
  titleColor: colors.white,
  buttonColor: colors.green
};

export default Button;
