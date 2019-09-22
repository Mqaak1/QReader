import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Text from './Text';
import styles, { colors }  from '../config/styles';

const Header = (props) => {
    const {title, backButton} = props;
    return (
      <View style={styles.common.headerContainer}>
        {backButton && (
        <TouchableOpacity style={styles.common.headerIconContainer} onPress={backButton}>
          <Icon name="arrow-left" size={25} color={colors.white} />
        </TouchableOpacity>
        )}
        <Text style={styles.common.headerTitle}>{title}</Text>
      </View>
    );
  }

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backButton: PropTypes.func
};
Header.defaultProps = {
  backButton: null
}

export default Header;