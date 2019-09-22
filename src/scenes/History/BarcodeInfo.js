import React from 'react';
import { View, TouchableOpacity, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Share from 'react-native-share';
import Tts from 'react-native-tts';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Toaster, {ToasterTypes} from "../../components/Popup";
import strings from "../../config/localization";
import styles, { colors } from '../../config/styles';

const copyToClipboard = (barcode) => {
    Toaster.showMessage(strings.copiedTo, ToasterTypes.MESSAGE); 
    Clipboard.setString(barcode)
}

const share = (barcode) => {
    Share.open({message:barcode})
}

const listen = (barcode) => {
  Tts.setDefaultLanguage('uk-UA');
  Tts.getInitStatus().then(() => {
    Tts.speak(barcode, { language: 'uk-UA' });
  });
}

const BarcodeInfo = (props) => {
    const {barcode} = props;
    const { rawData } = barcode;
    return (
      <Scene title={strings.scannedCode} index={1} navigator={false} backButton={()=>Actions.Scanner()}>
        <View style={{flex:1, padding:15}}>
          <Text style={{fontSize:16, color:colors.white, fontWeight:'bold'}}>text</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1, borderColor:colors.dark, paddingBottom:10, alignItems:'center'}}>
            <Text numberOfLines={1} style={{fontSize:16, color:colors.white, width:'80%'}}>{rawData}</Text>
            <TouchableOpacity onPress={() => copyToClipboard(rawData)} style={{paddingLeft:15}}>
              <Icon name='copy' style={[styles.common.navigatorItemIcon,{color:colors.white}]} />
            </TouchableOpacity>
          </View>
        </View>
        <Button onPress={() => listen(rawData)} title={strings.listen} style={{margin:15}} />
        <Button onPress={() => share(rawData)} title={strings.share} style={{margin:15}} buttonColor={colors.dark} />
      </Scene>
    );
}

export default connect(() => ({ }) , { })(BarcodeInfo);

BarcodeInfo.propTypes = {
  barcode: PropTypes.object
};


BarcodeInfo.defaultProps = {
    barcode: {rawData:'Відсканований QR код'}
};