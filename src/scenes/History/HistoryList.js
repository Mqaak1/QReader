import React, { Component } from 'react';
// import { ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import strings from "../../config/localization";

class ProfileScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() {
    return (
      <Scene title={strings.history} index={4} style={{flex:1}} />
    );
  }
}


export default connect(() => ({ }) , { })(ProfileScene);