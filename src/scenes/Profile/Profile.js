import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Picker from '../../components/Picker';
import Slider from '../../components/Slider';
import strings from "../../config/localization";
import {language as lang} from "../../config/helpers";

class ProfileScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config:{
        language:strings.getLanguage(),
        rate:0
      }
    }
  }

  async componentWillMount(){
    let config = await AsyncStorage.getItem('config');
    config = JSON.parse(config) || {language:strings.getLanguage(), rate:0};
    this.setState({config})
  }

  onLanguageChange(language){
    this.onStateChanged('language', language);
    strings.setLanguage(language)
  }

  onStateChanged(key, value) {
    const { config } = this.state;
    const newData = { ...config, [key]: value }
    this.setState({ config: newData });
    AsyncStorage.setItem('config', JSON.stringify(newData))
  }

  render() {
    const { config } = this.state;
    const { language, rate } = config;
    return (
      <Scene title={strings.settings} index={4}>
        <Picker value={language} items={lang} title={strings.language} onValueChange={(language) => this.onLanguageChange(language)} />
        <Slider value={rate} title={strings.speechRate} onSlidingComplete={(rate) => this.onStateChanged('rate', rate)} />
      </Scene>
    );
  }
}


export default connect(() => ({ }) , { })(ProfileScene);