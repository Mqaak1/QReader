import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
// import styles  from '../../config/styles';

const EmptyList = (props) => {
    const {barcode} = props;
    return (
      <View style={{flexDirection:'row'}}>
        <Image source={barcode.image} />
        <View>
          <Text style={{}}>{barcode.title}</Text>
          <Text style={{}}>{barcode.date}</Text>
        </View>
      </View>
    );
};

EmptyList.propTypes = {
    barcode: PropTypes.string
};

EmptyList.defaultProps = {
    barcode: {},
};

export default EmptyList;
