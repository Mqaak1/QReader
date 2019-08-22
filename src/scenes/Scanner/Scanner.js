import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import strings from "../../config/localization";

class ScannerScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() {
    return (
      <Scene title={strings.scanner} index={1} style={{flex:1}}>
        <ScrollView style={{padding:10, flex:1, backgroundColor:'red'}} contentContainerStyle={{flexWrap:'wrap', flexDirection: 'row'}} />
      </Scene>
    );
  }
}

export default connect(() => ({ }) , { })(ScannerScene);