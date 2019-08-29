import React from 'react';
import {Modal, View} from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles from '../config/styles';

const Dialog = (props) => {
    const {visible, onRequestClose, title, children, buttons} = props
    return (
      <Modal visible={visible} onRequestClose={onRequestClose} transparent>
        <View style={styles.common.dialogRootContainer}>
          <View style={styles.common.dialogBodyContainer}>
            <Text style={styles.common.dialogTitle}>{title}</Text>
            {children}
            {buttons}
          </View>
        </View>
      </Modal>
)};

Dialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
  buttons: PropTypes.node
};

Dialog.defaultProps = {
  visible: false,
  title: "",
  onRequestClose: () => {},
  children: null,
  buttons: null
};

export default Dialog;