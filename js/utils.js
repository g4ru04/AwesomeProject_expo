import React from 'react';
import { 
  PixelRatio,
  YellowBox,
} from 'react-native';
import Dimensions from 'Dimensions';
import { Header } from 'react-navigation';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1/PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 24 - Header.HEIGHT 
  },
  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        callback(responseData);
      });
  },
  preceding_operations: () => {
	YellowBox.ignoreWarnings([
	    'Warning: componentWillMount is deprecated',
        'Warning: componentWillReceiveProps is deprecated',
		'Warning: isMounted(...) is deprecated', 
		'Module RCTImageLoader',
		'Remote debugger'
	]);
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
  
};

export default Util;
