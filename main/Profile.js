import * as React from 'react';
import { Text,View,Button,StyleSheet,TouchableOpacity,Alert,YellowBox } from 'react-native';
import Util from '../js/utils';

Util.preceding_operations();

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "name":"Profile"
    }
  }
  onPressGoBack(){
	this.props.navigation.goBack()
  }
  render() {
    return (
	  <View style={styles.container}>
        <View style={styles.contextContainer}>
			<Text>I'm {this.state.name} of {this.props.navigation.state.params.name}</Text>
			<TouchableOpacity style={styles.button}
			  onPress={() => this.onPressGoBack()}>
			  <Text>← 上一頁</Text>
			</TouchableOpacity>
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
  button: {
    margin: 20,
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


