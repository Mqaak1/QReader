import React from 'react';
import { View, TextInput, Text as Icon} from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text'
import styles, { colors } from '../config/styles';

const Input = (props) => {
    const {title, info, required, icon, inputStyle, inputColor} = props;
    return (
      <View style={{justifyContent:'center'}}>
        {/* eslint-disable react/jsx-one-expression-per-line */}
        {title && <Text style={styles.common.inputTitle}>{title}{required && <Text style={{color: colors.red}}> *</Text>}</Text>}
        <TextInput {...props} style={[styles.common.input, {borderColor:inputColor}, inputStyle]} />
        <Text style={{color:inputColor}}>{icon && <Icon style={{fontFamily:'rebolet-mobile', color:inputColor}}>{icon}</Icon>} {info}</Text>
      </View>
    );
}

Input.propTypes = {
    inputStyle: TextInput.propTypes.style,
    title: PropTypes.string,
    info: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.bool,
    inputColor: PropTypes.string
};

Input.defaultProps = {
    inputStyle:{},
    title:null,
    info:'',
    icon:null,
    required:false,
    inputColor:colors.gray_20,
}
export default Input
