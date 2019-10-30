import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from "react-native-router-flux"; 
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Text from "./Text";
import styles, { colors } from '../config/styles';
import strings from "../config/localization";


const getColor = (currIndex, index) => {
  // А нехай йому грець, ви подивіться на цей пиздець
  let color = colors.grey;
  if(currIndex === index) color = colors.white;
  return color;
};


const Navigator = (props) => {  
  const {index} = props
  return(
    <View style={styles.common.navigationContainer}>
      <Button color={getColor(1, index)} onPress={Actions.Scanner} title={strings.scanner} icon='qrcode' />
      <Button color={getColor(2, index)} onPress={Actions.HistoryList} title={strings.history} icon='clock-o' />
      {/* <Button color={getColor(3, index)} onPress={Actions.TinderScene} title={strings.lookup} icon='plus' /> */}
      <Button color={getColor(4, index)} onPress={Actions.Profile} title={strings.settings} icon='gears' />
    </View>
  );
}
Navigator.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Navigator;

const Button = (props) => {  
  const {color, icon, title} = props
  return(
    <TouchableOpacity {...props} style={styles.common.navigatorItem}>
      <Icon name={icon} style={[styles.common.navigatorItemIcon,{color}]} />
      <Text style={{fontSize:10, fontWeight:'bold', color}}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}
Button.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};