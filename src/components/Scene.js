import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles, { colors } from '../config/styles'
import Navigator from "./BottomNavigator";
import Header from "./Header";

const Scene = (props) => {
    const { children, navigator, header, title, index } = props;
    if(Platform.OS === 'android') StatusBar.setBackgroundColor(colors.blue, true)
    return (
      <View style={styles.common.rootContainer}>
        <StatusBar backgroundColor='red' barStyle='light-content' />
        {header && <Header title={title} />}
        <View {...props}>
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
  index: PropTypes.number
};

Scene.defaultProps = {
  children: null,
  navigator: true,
  header: true,
  title:null,
  index:0
};

export default Scene;