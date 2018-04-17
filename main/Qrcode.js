import * as React from 'react';
import { Text,View,Button,StyleSheet,TouchableOpacity,Alert,YellowBox } from 'react-native';

export default class Qrcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "name":"Qrcode"
    }
  }
  render() {
    return (
      <Text>Hello EveryOne My name is {this.state.name}</Text>
    )
  }
}
