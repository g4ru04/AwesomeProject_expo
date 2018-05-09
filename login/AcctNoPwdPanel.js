import React from 'react';
import {
	AppRegistry,
	Text,
	StyleSheet,
	TextInput,
	View,
	Alert,
}
from 'react-native';
import PropTypes from 'prop-types';
import Util from '../js/utils';
import styles from '../js/styles';

class AcctNoPwdPanel extends React.Component {
    
    constructor( props ) {
		super( props );
		this.state = {
			"accountInfo": props.accountInfo
		};
    }
	
	getAccountInfo = () => {
		return this.state.accountInfo;
	}
	
	setUsername = ( username ) => {
		this.state.accountInfo.setState({ username });
	}
	
	setPassword = ( password ) => {
		this.state.accountInfo.setState({ password });
	}

    render() {
        return (
            <View style = { styles.verticalItems,stylesLocal.component } >
				<View style = { styles.verticalItems } >
					<Text style = { styles.textLabel } >
						帳號
					</Text>
					<TextInput
						style = { styles.wideTextInput }
						placeholder = { this.props.page=="login" ? "請輸入帳號/Email" : "請輸入帳號" }
						onChangeText = {( text ) => this.setUsername( text )}
						value = { this.state.accountInfo.state.username }
					/>
				</View>
				
				<View style = { styles.verticalItems }>
					<Text style = { styles.textLabel }>
						{ this.props.page=="login" ? "密碼" : "設定密碼" }
					</Text>
					<TextInput
						secureTextEntry = { true }
						style = { styles.wideTextInput }
						placeholder = "請輸入密碼"
						onChangeText = {(text) => this.setPassword( text ) }
						value = { this.state.accountInfo.state.password }
					/>
				</View>
            </View>
        );
    }
	static propTypes = {
		accountInfo: PropTypes.object.isRequired,
	}
}

const stylesLocal = StyleSheet.create({
    component: {
    },
});
export default AcctNoPwdPanel;	