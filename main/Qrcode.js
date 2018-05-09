import * as React from 'react';
import { Text,View,Button,StyleSheet,TouchableOpacity,Alert,YellowBox } from 'react-native';
import Util from '../js/utils';

export default class Qrcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "name":"Qrcode"
    }
  }
  render() {
    return (
	  <View style={styles.container}>
        <View style={styles.contextContainer}>
          <Text>Hello EveryOne My name is {this.state.name}</Text>
	    </View>
	  </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
	  marginTop: 0,
	  width: Util.size.width,
	  height: Util.size.height - 0,
	  flex:1,
  },
  contextContainer:{
	height: Util.size.height - 0 -200,
	top: 0 ,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: 'rgba(0,255,0,0.3)',
  },
});