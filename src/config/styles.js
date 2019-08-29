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
    justifyContent:'center',
    backgroundColor:colors.dark
  },
  headerContainer:{
    height: 45 + IOSpadding,
    paddingTop: IOSpadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:15,
    backgroundColor: colors.dark
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
});

export default { common, scanner };