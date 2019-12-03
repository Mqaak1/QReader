import React from 'react';
import { Picker, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles, {colors} from '../config/styles';

const PickerComponent = (props) => {
    const {items, value, onValueChange, title, style} = props;
    return (
      <View style={[styles.common.pickerContainer, style]}>
        <Text style={styles.common.pickerTitle}>{title}</Text>
        <Picker
          selectedValue={value}
          onValueChange={value => onValueChange(value)}
          style={{ color:colors.white }}
        >
          {items.map(item => (
            <Picker.Item key={item.key} label={item.label} value={item.value} />
        ))}
        </Picker>
      </View>
    )
}
export default PickerComponent;

PickerComponent.propTypes = {
    items: PropTypes.array,
    value: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
};
 
PickerComponent.defaultProps = {
    items: [],
    value:'',
    style:{}
};
