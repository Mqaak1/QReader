import React, { Component } from 'react';
import { View, Platform, TouchableOpacity, AsyncStorage } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import Permissions from 'react-native-permissions'
import RNFS from 'react-native-fs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Button from '../../components/Button';
import strings from "../../config/localization";
import {encrypt} from "../../config/crypt";
import styles, {colors} from '../../config/styles';



class ScannerScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      cameraPermission:true,
      isFlashlightOn:false
    }
    this.recognized = false
  }

  componentWillMount(){
    Permissions.check('camera')
      .then(per => {
        if(per === 'denied' || per ===  'undetermined' || per ===  'restricted') this.setState({cameraPermission:false})
      });
  }
    
  handlePermissionButton(){
    Permissions.request('camera').then(per => {
      if(per === 'authorized') this.setState({cameraPermission:true})
    });
  }

  barcodeRecognized = ({ barcodes }) => {
    if(!this.recognized ){
      this.recognized = true; 
      if(barcodes[0]) {
        console.warn(barcodes[0])
        this.saveBarcode(barcodes[0])
        // Actions.BarcodeInfo({barcode: barcodes[0]})
      }
    }
  };

  // eslint-disable-next-line class-methods-use-this
  async saveBarcode(barcode){
    const id = encrypt(barcode.data, barcode.data);
    console.warn('1')
    let barcodes = await AsyncStorage.getItem('barcodes');
    barcodes = JSON.parse(barcodes) || []
    console.warn('2')
    const exist = barcodes.find(item => item.id === id);
    if(exist) return
    barcodes.push({...barcode, id});
    await AsyncStorage.setItem('barcodes', JSON.stringify(barcodes))
  }
  saveQrToDisk() {
    this.svg.toDataURL((data) => {
      RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
        .then(success => console.warn('success', success))
    })
 }
  render() {
    const {cameraPermission, isFlashlightOn} = this.state;
    return (
      <Scene title={strings.scanner} index={1}>
        <RNCamera
          ref={ref => {this.camera = ref;}}
          style={{ flex: 1 }}
          onBarCodeRead={Platform.select({ ios: this.barcodeRecognized, android: null })}
          onGoogleVisionBarcodesDetected={Platform.select({ android: this.barcodeRecognized, ios: null })}
          flashMode={isFlashlightOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        >
          <BarcodeMask />
        </RNCamera>
        <TouchableOpacity onPress={() => this.setState({isFlashlightOn:!isFlashlightOn})} style={styles.scanner.flashlightContainer}>
          <Icon name={`${isFlashlightOn ? 'flashlight-off' : 'flashlight'}`} style={[styles.common.navigatorItemIcon,{color:colors.white}]} />
        </TouchableOpacity>
        {!cameraPermission && <PermissionDialog onPermissionButtonPress={() => this.handlePermissionButton()} />}
      </Scene>
    );
  }
}

export default connect(() => ({ }) , { })(ScannerScene);

export const PermissionDialog = (props) => {
  const { onPermissionButtonPress }= props;
  return (
    <View style={styles.scanner.permissionDialog}>
      <Text style={styles.scanner.permissionTitle}>{strings.appPermissions}</Text>
      <Text style={styles.scanner.permissionDescription}>{strings.wouldLikeToUse}</Text>
      <Button onPress={onPermissionButtonPress} title={strings.allow}  />
    </View>
  )
};
PermissionDialog.propTypes = {
  onPermissionButtonPress: PropTypes.func.isRequired
};