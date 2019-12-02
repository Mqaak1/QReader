import React from 'react';
import { View, StatusBar, Platform, YellowBox } from 'react-native';
import PropTypes from 'prop-types';
import styles, { colors } from '../config/styles'
import Navigator from "./BottomNavigator";
import Header from "./Header";
import Loader from "./Loader";

const Scene = (props) => {
    const { children, navigator, header, title, index, backButton, loading } = props;
    YellowBox.ignoreWarnings([ 'Warning: Async Storage has been' ]);
    if(Platform.OS === 'android') StatusBar.setBackgroundColor(colors.dark, true)
    return (
      <View style={styles.common.rootContainer}>
        <StatusBar backgroundColor='red' barStyle='light-content' />
        {header && <Header title={title} backButton={backButton} />}
        <Loader visible={loading} />
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
  loading: PropTypes.bool,
  header: PropTypes.bool,
  title: PropTypes.string,
  backButton: PropTypes.func,
  index: PropTypes.number
};

Scene.defaultProps = {
  children: null,
  navigator: true,
  loading: false,
  header: true,
  title:null,
  backButton:null,
  index:0
};

export default Scene;