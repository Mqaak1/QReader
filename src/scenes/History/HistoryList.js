import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import EmptyList from '../../components/EmptyList';
import HistoryItem from '../../components/History/HistoryItem';
import strings from "../../config/localization";

class HistoryListScene extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      barcodes:[]
    }
  }

  async componentWillMount(){
    const barcodes = await AsyncStorage.getItem('barcodes');
    this.setState({barcodes: JSON.parse(barcodes) || []})
  }

  render() {
    const {barcodes} = this.state;
    return (
      <Scene title={strings.history} index={2}>
        {barcodes.length === 0 && <EmptyList title={strings.noScannedBarcode} descrition={strings.pleaseScanThe} icon='qrcode' />}
        {barcodes.map(barcode => <HistoryItem key={barcode.id} barcode={barcode} />)}
      </Scene>
    );
  }
}


export default connect(() => ({ }) , { })(HistoryListScene);