import React from 'react';
import { ViewPropTypes, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Text from './Text';
import styles  from '../config/styles';

const EmptyList = (props) => {
    const {title, descrition, icon, style} = props;
    return (
      <View style={[styles.history.emptyListContainer, style]}>
        <Icon name={icon} style={styles.history.emptyListIcon} />
        <Text style={styles.history.emptyListTitle}>{title}</Text>
        <Text style={styles.history.emptyListDescription}>{descrition}</Text>
      </View>
    );
};

EmptyList.propTypes = {
  title: PropTypes.string.isRequired,
  descrition: PropTypes.string,
  style: ViewPropTypes.style,
  icon: PropTypes.string
};

EmptyList.defaultProps = {
  style: {},
  descrition: '',
  icon:'qrcode'
};

export default EmptyList;
