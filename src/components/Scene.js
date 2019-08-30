import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles, { colors } from '../config/styles'
import Navigator from "./BottomNavigator";
import Header from "./Header";

const Scene = (props) => {
    const { children, navigator, header, title, index, backButton } = props;
    if(Platform.OS === 'android') StatusBar.setBackgroundColor(colors.dark, true)
    return (
      <View style={styles.common.rootContainer}>
        <StatusBar backgroundColor='red' barStyle='light-content' />
        {header && <Header title={title} backButton={backButton} />}
        <View style={{flex:1, backgroundColor:colors.black}} {...props}>
          {children}
        </View>
        {navigator && <Navigator index={index} />}
      </View>
    );
}

Scene.propTypes = {
  children: PropTypes.node,
  navigator: PropTypes.bool,
  header: PropTypes.bool,
  title: PropTypes.string,
  backButton: PropTypes.bool,
  index: PropTypes.number
};

Scene.defaultProps = {
  children: null,
  navigator: true,
  header: true,
  title:null,
  backButton:false,
  index:0
};

export default Scene;