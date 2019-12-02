import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import Scene from '../../components/Scene';
import EmptyList from '../../components/EmptyList';
import Button from '../../components/Button';
import HistoryItem from '../../components/History/HistoryItem';
import strings from "../../config/localization";
import { colors } from '../../config/styles';

class HistoryListScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,  
      barcodes:[]
    }
  }

  async componentWillMount(){
    this.setState({loading:true})
    let barcodes = await AsyncStorage.getItem('barcodes');
    barcodes =  JSON.parse(barcodes) || []
    this.setState({barcodes: barcodes.reverse(), loading:false})
  }


  async removeBarcode(barcode = {}){
    this.setState({loading:true, barcodes:[]})
    let barcodes = await AsyncStorage.getItem('barcodes');
    barcodes =  JSON.parse(barcodes) || [];
    const index = barcodes.findIndex(item => item.id === barcode.id);
    if (index < 0) return this.setState({barcodes: barcodes.reverse(), loading:false});
    barcodes.splice(index, 1);
    await AsyncStorage.setItem('barcodes', JSON.stringify(barcodes));
    this.setState({barcodes: barcodes.reverse(), loading:false});
  }

  render() {
    const {barcodes, loading} = this.state;
    return (
      <Scene title={strings.history} loading={loading} index={2}>
        {barcodes.length === 0 && <EmptyList title={strings.noScannedBarcode} descrition={strings.pleaseScanThe} icon='qrcode' />}
        {/* {barcodes.map(barcode => <HistoryItem key={barcode.id} barcode={barcode} handleChooseItem={() => Actions.BarcodeInfo({barcode})} />)} */}
        <SwipeListView 
          data={barcodes}
          renderItem={(barcode) => (
            <SwipeRow
              disableRightSwipe
              rightOpenValue={-100}
            >       
              <Button onPress={() => this.removeBarcode(barcode.item)} title={strings.delete} style={{flex:1, width:100, alignSelf:'flex-end'}} buttonColor={colors.red} />
              <HistoryItem barcode={barcode.item} handleChooseItem={() => Actions.BarcodeInfo({barcode:barcode.item})} />  
            </SwipeRow>
          )}
        />
      </Scene>
    );
  }
}


export default connect(() => ({ }) , { })(HistoryListScene);