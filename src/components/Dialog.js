import React from 'react';
import {Modal, View} from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import styles, { colors } from '../config/styles';

const Dialog = (props) => {
    const {visible, onRequestClose, title, children, buttons} = props
    return (
      <Modal visible={visible} onRequestClose={onRequestClose} transparent>
        <View style={styles.common.dialogRootContainer}>
          <View style={{marginHorizontal: 25, backgroundColor: colors.white, padding:15, borderRadius:5}}>
            <Text style={{color: colors.black, fontSize: 16, textAlign:'center'}}>{title}</Text>
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