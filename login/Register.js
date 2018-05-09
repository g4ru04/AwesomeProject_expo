import * as React from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	Alert,
	YellowBox,
	TextInput,
	Picker,
	ScrollView,
	//CheckBox,
}
from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Util from '../js/utils';
import styles from '../js/styles';
import AcctNoPwdPanel from './AcctNoPwdPanel';

Util.preceding_operations();

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
			yearOption: Array(99).fill().map((v, i) => i+1920),
			monthOption: Array(12).fill().map((v, i) => i+1),
			dayOption: Array(31).fill().map((v, i) => i+1),
			
			email: "",
			username: "",
			password: "",
			checkPwd: "",
			birthYear: -1,
			birthMonth: -1,
			birthDay: -1,
			name: "",
			phone: "",
			idCardNum: "",
			agree: false,
		}
	}

	validateEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	};
	validatePhone = (phone) => {
		return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(phone);
	};
	validateidCardNum = (idCardNum) => {
		return /^[A-Za-z]\d{9}$/.test(idCardNum);
	};
	
	
	validate(){
		let valid = true;

		
		if(this.state.email=="" ||
			this.state.username=="" ||
			this.state.password=="" ||
			this.state.checkPwd=="" ||
			this.state.birthYear==-1 ||
			this.state.birthMonth==-1 ||
			this.state.birthDay==-1 ||
			this.state.name=="" ||
			this.state.phone=="" ||
			this.state.idCardNum=="" ||
			this.state.agree==false
		){
			valid = false;
			Alert.alert("請完整填寫");
		}else if(this.state.password != this.state.checkPwd){
			valid = false;
			Alert.alert("兩次密碼請填寫一致");
		}else if(this.state.agree==false){
			valid = false;
			Alert.alert("請同意使用者條款後繼續註冊");
		}else if(!this.validateEmail(this.state.email)){
			valid = false;
			Alert.alert("Email格式不正確");
		}else if(!this.validatePhone(this.state.phone)){
			valid = false;
			Alert.alert("電話格式不正確");
		}else if(!this.validateidCardNum(this.state.idCardNum)){
			valid = false;
			Alert.alert("身分證格式不正確");
		}
		
		return valid;
	}
	
	onPressRegister(){
		//Register
		if(this.validate()){
			Alert.alert("成功");
			/*
			if(AccessDatabase.account.idExist()){
				//Continue
			}
			*/
		}else{
			
		}
		
	}
	
	onPressCancel(){
		Actions.pop()
	}
	
	onPressUsage(){
		Alert.alert("跳使用者條款頁面");
	}
	
	render() {
		
		let yearPickerItems = this.state.yearOption.map( (s, i) => {
			return <Picker.Item key={i} value={s} label={String(s)} />
		});
		yearPickerItems.unshift( <Picker.Item key={-1} value={-1} label={"年份"} /> );
	
		let monthPickerItems = this.state.monthOption.map( (s, i) => {
			return <Picker.Item key={i} value={s} label={String(s)} />
		});
		monthPickerItems.unshift( <Picker.Item key={-1} value={-1} label={"月份"} /> );
	
		let dayPickerItems = this.state.dayOption.map( (s, i) => {
			return <Picker.Item key={i} value={s} label={String(s)} />
		});
		dayPickerItems.unshift( <Picker.Item key={-1} value={-1} label={"日期"} /> );
	
		return (
			<ScrollView style = { styles.container,stylesLocal.container } >
				<View style = { styles.verticalItems } >
					<Text style = { styles.textLabel } >
						Email
					</Text>
					<TextInput
						keyboardType = { 'email-address' }
						style = { styles.wideTextInput }
						placeholder = "請輸入Email"
						onChangeText = { (email) => this.setState({email}) }
						value= { this.state.email }
					/>
				</View>
				<AcctNoPwdPanel ref = { accountInfo => this.accountInfo = accountInfo } accountInfo = { this } page="register" />
				<View style = { styles.verticalItems } >
					<Text style = { styles.textLabel } >
						密碼確認
					</Text>
					<TextInput
						secureTextEntry = { true }
						style = { styles.wideTextInput }
						placeholder = "請再次輸入密碼"
						onChangeText = {(checkPwd) => this.setState({ checkPwd }) }
					/>
				</View>
				<View style = { styles.verticalItems } >
					<Text style = { styles.textLabel } >
						生日
					</Text>
					<View style = { styles.horizenItems } >
						<Picker
							style = { styles.picker }
							selectedValue = { this.state.birthYear }
							onValueChange = {( birthYear, itemIndex) => {
								this.setState({ birthYear });
								let daysOfMonth = new Date( birthYear, this.state.birthMonth, 0).getDate();
								if( !isNaN(daysOfMonth) ){
								this.setState({ "dayOption": Array(daysOfMonth).fill().map((v, i) => i+1)});
								}
							}}>
								{ yearPickerItems }
						</Picker>
						<Picker
							style = { styles.picker }
							selectedValue = { this.state.birthMonth }
							onValueChange={( birthMonth, itemIndex) =>{
								this.setState({ birthMonth });
								let daysOfMonth = new Date( this.state.birthYear, birthMonth, 0).getDate();
								if( !isNaN(daysOfMonth) ){
								this.setState({ "dayOption": Array(daysOfMonth).fill().map((v, i) => i+1) });
								}
							}}>
								{ monthPickerItems }
						</Picker>
						<Picker
							style = { styles.picker }
							selectedValue = { this.state.birthDay }
							onValueChange = {( birthDay, itemIndex) => this.setState({ birthDay }) }>
								{ dayPickerItems }
						</Picker>
					</View>
				</View>
				<View style = { styles.verticalItems }>
					<Text style = { styles.textLabel }>
						姓名
					</Text>
					<TextInput
						keyboardType = { 'default' }
						style = { styles.wideTextInput }
						placeholder = "請輸入姓名"
						onChangeText = {(name) => this.setState({ name })}
						value = { this.state.name }
					/>
				</View>
				<View style = { styles.verticalItems }>
					<Text style = { styles.textLabel }>
						手機號碼
					</Text>
					<TextInput
						keyboardType = { 'numeric' }
						style = { styles.wideTextInput }
						placeholder = "請輸入手機號碼"
						onChangeText = {(phone) => this.setState({ phone })}
						value= { this.state.phone }
					/>
				</View>
				<View style = { styles.verticalItems }>
					<Text style = { styles.textLabel }>
						身分證號
					</Text>
					<TextInput
						keyboardType = { 'email-address' }
						style = { styles.wideTextInput }
						placeholder = "請輸入身分證號"
						onChangeText = {(idCardNum) => this.setState({ idCardNum })}
						value= { this.state.idCardNum }
					/>
				</View>
				<View style = { styles.horizenItems }>
					<CheckBox
						center
						containerStyle = {{ backgroundColor: 'transparent', margin: 0}}
						title = '我同意使用者條款'
						checked = { this.state.agree }
						onPress = {() => this.setState({ agree: !this.state.agree })}
					/>
					<TouchableOpacity 
						onPress = {() => this.onPressUsage() }>
						<Text style = { stylesLocal.forgetBtnText }>條款</Text>
					</TouchableOpacity>
				</View>
				<View style = { styles.horizenItems }>
					<TouchableOpacity style = { styles.button }
						onPress = {() => this.onPressRegister() }>
						<Text style = { styles.buttonText }>註冊</Text>
					</TouchableOpacity>
					<TouchableOpacity style = { styles.button }
						onPress = {() => this.onPressCancel() }>
						<Text style = { styles.buttonText }>返回</Text>
					</TouchableOpacity>
				</View>
				<Text></Text>
				<Text></Text>
			</ScrollView>
		)
	}
}
const stylesLocal = StyleSheet.create({
	container: {
		marginTop: 0,
		padding: 20,
		width: Util.size.width,
		maxHeight: Util.size.height - 0,
		flex: 1,
	},
	forgetBtnText: {
		color: "#4A90E2",
		textAlign: 'center',
	},
});

