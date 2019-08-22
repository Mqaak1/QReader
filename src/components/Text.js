import React from 'react';
import { Text as RNText } from 'react-native';

const Text = (props) => {
   const { style } = props;
   return(<RNText {...props} style={[style, { fontFamily: 'CenturyGothic' }]} />)
}

Text.propTypes = {
    style: RNText.propTypes.style,
    ...RNText.propTypes
  };
  
  Text.defaultProps = {
    style: {}
  };

export default Text;
