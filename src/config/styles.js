import { Platform, StyleSheet } from "react-native";

export const IOSpadding = (Platform.OS === 'ios') ? 23 : 0;

export const Shadow = Platform.select({
  ios: {   
  shadowOpacity: 0.3,
  shadowRadius: 5,
  shadowOffset: {
      height: 0,
      width: 0
  }},  android: {elevation: 5}})

export const colors = {   
  black:'rgb(7,5,4)',
  dark:'rgb(20,18,17)',
  grey:'rgb(92,94,96)',
  white:'rgb(255,255,255)',
  green:'rgb(42,158,99)',
  red:'#ed1c24',
  translucent:'rgba(0,0,0,0.5)'
};

export const common = StyleSheet.create({
  rootContainer:{
    flex: 1,
    backgroundColor:colors.white
  },
  preloaderContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headerContainer:{
    height: 45 + IOSpadding,
    paddingTop: IOSpadding,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:15,
    backgroundColor: colors.dark
  },
  headerIconContainer:{
    paddingRight:20,
    paddingVertical:5
  },
  headerTitle:{
    fontSize:22,
    color:colors.white,
    fontWeight:'bold'
  },
  navigationContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:5,
    backgroundColor:colors.dark
  },
  navigatorItem:{
    alignItems:'center',
    justifyContent:'center',
    width:100
  },
  navigatorItemIcon:{
    fontSize:24,
    color:colors.white
  },
  inputTitle:{
    color:colors.dark,
    fontSize:16,
    fontWeight:'bold'
  },
  input:{
    padding:15,
    borderWidth:1,
    borderColor:colors.dark,
    borderRadius:5
  },
  buttonContainer:{
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  buttonTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  dialogRootContainer: {
    flex: 1,
    backgroundColor: colors.translucent,
    justifyContent: 'center'
  },
  dialogBodyContainer:{
    marginHorizontal: 25,
    backgroundColor: colors.white,
    padding:15,
    borderRadius:5
  },
  dialogTitle:{
    color: colors.black, 
    fontSize: 16,
    textAlign:'center'
  },
  toastsContainer: {
    zIndex: 1, position: 'absolute',
    top: 45 + IOSpadding, left: 0, right: 0,
    elevation: 5
  },
  toastView: {
    elevation: 4,
    backgroundColor: colors.dark,
    padding: 10, zIndex: 1,
    marginHorizontal: 15,
    marginVertical: 2,
    borderRadius: 10
  },
  pickerContainer: {
    backgroundColor:colors.dark,
    padding:10,
    marginHorizontal:15,
    marginTop:15,
    borderRadius:15
  },
  pickerTitle:{
    fontSize:16,
    color:colors.white
  }
});


export const scanner = StyleSheet.create({
  permissionDialog:{
    position:'absolute',
    padding:15,
    alignSelf:'center',
    bottom:15,
    borderRadius:15,
    backgroundColor:colors.dark
  },
  permissionTitle:{
    fontSize:18,
    color:colors.white,
    fontWeight:'bold',
    textAlign:'center'
  },
  permissionDescription:{
    fontSize:16,
    color:colors.white,
    fontWeight:'bold',
    marginVertical:10
  },
  flashlightContainer:{
    position:'absolute',
    alignSelf:'center',
    paddingHorizontal:25,
    paddingVertical:10,
    borderWidth:1,
    borderColor:colors.white,
    borderRadius:10,
    bottom:25
  }
});

export const history = StyleSheet.create({
  barcodeInfoContainer:{
    flex:1,
    padding:15
  },
  barcodeInfoTitle:{
    fontSize:16,
    color:colors.white,
    fontWeight:'bold'
  },
  barcodeTitleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:10,
    alignItems:'center'
  },
  barcodeInfoTitleText:{
    fontSize:16,
    color:colors.white,
    marginBottom:15
  },
  emptyListContainer:{
    alignItems:'center',
    padding:15
  },
  emptyListIcon:{
    color:colors.white,
    fontSize:44
  },
  emptyListTitle:{
    fontSize:20,
    color:colors.white,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:5
  },
  emptyListDescription:{
    fontSize:16,
    color:colors.grey,
    textAlign:'center',
    fontWeight:'bold'
  },
  historyItemContainer:{
    flexDirection:'row',
    padding:15,
    borderBottomColor:colors.grey,
    borderBottomWidth:0.5,
    alignItems:'center',
    backgroundColor:colors.black
  }
});

export default { common, scanner, history };