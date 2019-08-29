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
  blue:'#111f4d',
  orange:'#fd5f00',
  black:'#000000',
  green:'#39b54a',
  red:'#ed1c24',
  white:'#ffffff',
  gray_100:'#7f8fa4',
  gray_50:'#bfc7d1',
  gray_20:'#e5e9ed',
  gray_10:'#f2f3f5',
  gray_5:'#f8f9fa',
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
    justifyContent:'center',
    backgroundColor:colors.blue
  },
  headerContainer:{
    height: 45 + IOSpadding,
    paddingTop: IOSpadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:15,
    backgroundColor: colors.blue
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
    backgroundColor:colors.gray_5
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
    color:colors.gray_100,
    fontSize:16,
    fontWeight:'bold'
  },
  input:{
    padding:15,
    borderWidth:1,
    borderColor:colors.gray_20,
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
  }
});

export default { common };