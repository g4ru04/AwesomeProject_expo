import React from 'react';
import { StyleSheet } from 'react-native';
import Util from './utils';

const styles = StyleSheet.create({
  container:{
	  marginTop: 0,
	  padding:20,
	  width: Util.size.width,
	  height: Util.size.height - 0,
	  maxHeight: Util.size.height - 0,
	  flex:1,
  },
  topContainer:{
	top: 0,
	height: 80,
	justifyContent: 'center',
	alignItems: 'center',
	//backgroundColor: 'rgba(255,0,0,0.3)',
  },
  middleContainer: {
	height: Util.size.height - 200,
	top: 0 ,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	//backgroundColor: 'rgba(0,255,0,0.3)',
  },
  bottomContainer: {
	justifyContent: 'center',
	bottom:0,
    height: 120,
	//backgroundColor: 'rgba(0,0,255,0.3)',
  },
  contextContainer:{
	height: Util.size.height - 40,
	top: 0 ,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	//backgroundColor: 'rgba(0,255,0,0.3)',
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
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizenItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalItems: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  
  textLabel: {
    
  },
  wideTextInput: {
    width: Util.size.width - 80,
  },
  widePicker: {
    width: Util.size.width - 80,
  },
  picker:{
	  height: 50,
	  width: 120
  }
});

export default styles;