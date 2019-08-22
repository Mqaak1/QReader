import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import strings from "../../config/localization";

class ProfileScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() {
    return (
      <Scene title={strings.profile} index={4} style={{flex:1}}>
        <ScrollView style={{flex:1, backgroundColor:'green'}} />
        <Text styles={{fontSize:16}}>New Application</Text>
      </Scene>
    );
  }
}


export default connect(() => ({ }) , { })(ProfileScene);