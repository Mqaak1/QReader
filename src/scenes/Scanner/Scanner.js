import React, { Component } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions'
import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Button from '../../components/Button';
import strings from "../../config/localization";
import styles from '../../config/styles';


class ScannerScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      cameraPermission:true
    }
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
    console.warn(barcodes)
    // barcodes.forEach(barcode => console.warn(barcode.data))
  };

  render() {
    const {cameraPermission} = this.state;
    return (
      <Scene title={strings.scanner} index={1}>
        <RNCamera
          ref={ref => {this.camera = ref;}}
          style={{ flex: 1 }}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        />
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