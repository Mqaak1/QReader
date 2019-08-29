import React, { Component } from 'react';
// import { ScrollView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions'
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import PermissionDialog from '../../components/Dialog';
import strings from "../../config/localization";

class ScannerScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      cameraPermission:true
    }
  }

  // componentWillMount(){
  //   Permissions.check('camera')
  //     .then(per => {
  //       if(per === 'denied') this.setState({cameraPermission:false})
  //     });
  // }

  render() {
    const {cameraPermission} = this.state;
    return (
      <Scene title={strings.scanner} index={1} style={{flex:1}}>
        <RNCamera
          ref={ref => {this.camera = ref;}}
          style={{ flex: 1, width: '100%' }}
        />
        <PermissionDialog 
          visible={!cameraPermission}
          onRequestClose={() => this.setState({ cameraPermission:true })}
          title={strings.appPermissions}
        >
          <Text>{strings.wouldLikeToUse}</Text>
        </PermissionDialog>
      </Scene>
    );
  }
}

export default connect(() => ({ }) , { })(ScannerScene);