import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scene from '../../components/Scene';
import strings from "../../config/localization";

class PreLoaderScene extends Component {
  async componentWillMount(){
    let config = await AsyncStorage.getItem('config');
    config = JSON.parse(config) || {language:strings.getLanguage(), rate:0};
    strings.setLanguage(config.language);
    Actions.Scanner();
  }

  render() {
    return (
      <Scene loading navigator={false} title='' />
    );
  }
}


export default PreLoaderScene;