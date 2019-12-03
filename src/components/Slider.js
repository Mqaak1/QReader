import React from 'react';
import { Slider, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles, {colors} from '../config/styles';

const PickerComponent = (props) => {
    const {minimumValue, maximumValue, title, style} = props;
    return (
      <View style={[styles.common.pickerContainer, style]}>
        <Text style={styles.common.pickerTitle}>{title}</Text>
        <Slider
          {...props}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumTrackTintColor={colors.green}
          maximumTrackTintColor={colors.white}
        />
      </View>
    )
}
export default PickerComponent;

PickerComponent.propTypes = {
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    title: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
};
 
PickerComponent.defaultProps = {
    minimumValue:0,
    maximumValue:1,
    style:{}
};
