import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles, { colors } from '../../config/styles';

const EmptyList = (props) => {
    const {barcode, handleChooseItem} = props;
    return (
      <TouchableOpacity style={styles.history.historyItemContainer} onPress={handleChooseItem} activeOpacity={1}>
        <QRCode value={barcode.rawData} size={50} />
        <View style={{flex:1, paddingHorizontal:10}}>
          <Text numberOfLines={2} style={styles.history.barcodeInfoTitle}>{barcode.rawData}</Text>
          <Text numberOfLines={1} style={{fontSize:12, color:colors.grey}}>{barcode.date}</Text>
        </View>
      </TouchableOpacity>
    );
};

EmptyList.propTypes = {
  barcode: PropTypes.object,
  handleChooseItem: PropTypes.func.isRequired
};

EmptyList.defaultProps = {
  barcode: {},
};

export default EmptyList;
