import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles  from '../config/styles';

const Header = (props) => {
    const {title} = props;
    return (
      <View style={styles.common.headerContainer}>
        <View>
          <Text style={styles.common.headerTitle}>{title}</Text>
        </View>
      </View>
    );
  }

Header.propTypes = {
  title: PropTypes.string.isRequired
};

// Header.defaultProps = {
//   backBtnFunc: null
// };
export default Header;