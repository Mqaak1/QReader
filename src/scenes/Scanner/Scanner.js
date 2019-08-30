import React, { Component } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Button from '../../components/Button';
import strings from "../../config/localization";
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
      Actions.BarcodeInfo({barcode: barcodes})
    }
    console.warn(barcodes);
  };

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
        />
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