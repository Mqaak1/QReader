/* eslint-disable class-methods-use-this */
import React, {Component} from 'react';
import { View, ScrollView, TouchableOpacity, Clipboard, AsyncStorage, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Share from 'react-native-share';
import Tts from 'react-native-tts';
import Scene from '../../components/Scene';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Toaster, {ToasterTypes} from "../../components/Popup";
import strings from "../../config/localization";
import {chooseLanguage, isValidURL} from '../../config/helpers';
import styles, { colors } from '../../config/styles';

class BarcodeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
    Tts.addEventListener("tts-start", () => this.setState({ status: "started" }));
    Tts.addEventListener("tts-finish", () => this.setState({ status: "finished" }));
    Tts.addEventListener("tts-cancel", () => this.setState({ status: "cancelled" }));
  }

  async componentDidMount(){
    const {barcode} = this.props;
    const { rawData } = barcode;
    let config = await AsyncStorage.getItem('config');
    config = JSON.parse(config) || { rate:0.5, language:strings.getLanguage() }
    const language = chooseLanguage(config.language)
    Tts.setDefaultRate(config.rate || 0.5);
    Tts.getInitStatus().then(()=>{
      Tts.setDefaultLanguage(language);
    });
    const isUrl = isValidURL(rawData);
    // eslint-disable-next-line react/no-did-mount-set-state
    if(isUrl) this.setState({status:'url'})
  }

  componentWillUnmount(){
    Tts.stop();
  }

  copyToClipboard(barcode){
    Toaster.showMessage(strings.copiedTo, ToasterTypes.MESSAGE); 
    Clipboard.setString(barcode)
  }

  share(barcode){
    Share.open({message:barcode})
  }

  listen(barcode){    
    Tts.stop();
    Tts.speak(barcode);
  }

  openURL = (url) => {
    if(!url) return
    Linking.canOpenURL(url).then(supported => {
      if (supported) return Linking.openURL(url);
      Toaster.showMessage(strings.urlNotOpen, ToasterTypes.ERROR); 
    })
  }

  render(){
      const {barcode} = this.props;
      const { rawData } = barcode;
      const { status } = this.state;
      const renderButton = ()=>{
        switch (status) {
          case 'url': return <Button onPress={() => this.openURL(rawData)} title={strings.openInBrowser} style={{marginBottom:15}} />;
          case 'started': return <Button onPress={() => Tts.stop()} title={strings.stop} style={{marginBottom:15}} buttonColor={colors.red} />;
          default: return <Button onPress={() => this.listen(rawData)} title={strings.listen} style={{marginBottom:15}} /> ;
        }
      };
      return (
        <Scene title={strings.scannedCode} index={1} navigator={false} backButton={()=>Actions.Scanner()}>
          <ScrollView style={styles.history.barcodeInfoContainer}>
            <View style={styles.history.barcodeTitleContainer}>
              <Text style={styles.history.barcodeInfoTitle}>{strings.text}</Text>
              <TouchableOpacity onPress={() => this.copyToClipboard(rawData)} style={{paddingLeft:15}}>
                <Icon name='copy' style={[styles.common.navigatorItemIcon,{color:colors.white}]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.history.barcodeInfoTitleText}>{rawData}</Text>
          </ScrollView>
          <View style={{paddingHorizontal:15}}>
            {renderButton()}       
            <Button onPress={() => this.share(rawData)} title={strings.share} style={{marginBottom:15}} buttonColor={colors.dark} />
          </View>
        </Scene>
      );
  }
}
export default BarcodeInfo;

BarcodeInfo.propTypes = {
  barcode: PropTypes.object
};


BarcodeInfo.defaultProps = {
    barcode: {rawData:'Відсканований QR код'}
};