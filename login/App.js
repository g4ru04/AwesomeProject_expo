import React, {
	Component
}
from 'react';
import {
	AppRegistry,
	Text,
	TextInput,
	View
}
from 'react-native';
import {
	Router,
	Scene
}
from 'react-native-router-flux'
import Main from './Main';
import Login from './Login';
import Register from './Register';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Scene key = "root">
					<Scene key = "login" 
						component = {Login} 
						title = "Login" 
						initial = {true} 
					/>
					<Scene key = "register" 
						component = {Register} 
						title = "Register" 
					/>
				</Scene>
			</Router>
		);
	}
}