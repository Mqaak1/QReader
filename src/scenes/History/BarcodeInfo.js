import React from 'react';
import { View, TouchableOpacity, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Toaster, {ToasterTypes} from "../../components/Popup";
// import Button from '../../components/Button';
import strings from "../../config/localization";
import styles, { colors } from '../../config/styles';

const copyToClipboard = (barcode) => {
    Toaster.showMessage(strings.copiedTo, ToasterTypes.MESSAGE); 
    Clipboard.setString(barcode)
}

const BarcodeInfo = (props) => {
    const {barcode} = props;
    return (
      <Scene title={strings.scannedCode} index={1} navigator={false} backButton>
        <View style={{flex:1, padding:10, margin:15}}>
          <Text style={{fontSize:16, color:colors.white, fontWeight:'bold'}}>text</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1, borderColor:colors.dark, paddingBottom:10, alignItems:'center'}}>
            <Text numberOfLines={1} style={{fontSize:16, color:colors.white, width:'80%'}}>{barcode}</Text>
            <TouchableOpacity onPress={() => copyToClipboard(barcode)} style={{paddingLeft:15, borderWidth:1, borderColor:'red'}}>
              <Icon name='copy' style={[styles.common.navigatorItemIcon,{color:colors.dark}]} />
            </TouchableOpacity>
          </View>
        </View>
      </Scene>
    );
}

export default connect(() => ({ }) , { })(BarcodeInfo);

BarcodeInfo.propTypes = {
  barcode: PropTypes.string
};


BarcodeInfo.defaultProps = {
    barcode: 'My name is!'
};