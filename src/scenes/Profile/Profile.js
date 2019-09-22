import React, { Component } from 'react';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import Picker from '../../components/Picker';
import strings from "../../config/localization";

const lang = [{label: 'English', value: 'en', key: 'en'}, {label: 'Deutsch', value: 'de', key: 'de'}, {label: 'Українська', value: 'ua', key: 'ua'}];

class ProfileScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:strings.getLanguage()
    }
  }

  onLanguageChange(language){
    this.setState({language});
    strings.setLanguage(language)
  }

  render() {
    const { language } = this.state;
    return (
      <Scene title={strings.settings} index={4}>
        <Picker value={language} items={lang} title={strings.language} onValueChange={(language) => this.onLanguageChange(language)} />
      </Scene>
    );
  }
}


export default connect(() => ({ }) , { })(ProfileScene);