import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ScrollView,
}
from 'react-native';
import {
	Actions
}
from 'react-native-router-flux';

import Util from '../js/utils';
import styles from '../js/styles';

import AcctNoPwdPanel from './AcctNoPwdPanel';

Util.preceding_operations();

export default class Login extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			"username": "",
		"password": ""
		}
	}
	
	onPressLogin(){
		Alert.alert( "帳號:" + this.state.username + "\r\n密碼:" + this.state.password );
	}
	
	onPressRegister(){
		Actions.register();
	}
	
	onPressForget(){
		Alert.alert("跳忘記密碼頁面");
	}
	
	render() {
		return (
			<ScrollView style = { styles.container } >
				<View style = { styles.contextContainer } >
					<AcctNoPwdPanel ref = { accountInfo => this.accountInfo = accountInfo } accountInfo = { this } page = "login" />
					<View style = { styles.horizenItems } >
						<TouchableOpacity style = { styles.button}
							onPress = {() => this.onPressLogin() } >
							<Text style = { styles.buttonText } >登入</Text>
						</TouchableOpacity>
						<TouchableOpacity style = { styles.button }
							onPress = {() => this.onPressRegister() } >
							<Text style = { styles.buttonText } >註冊</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity 
						onPress={() => this.onPressForget() } >
						<Text style = { stylesLocal.forgetBtnText } >忘記密碼?</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}
const stylesLocal = StyleSheet.create({
	forgetBtnText: {
		color: "#4A90E2",
		textAlign: 'center',
	},
});

