
// refer to https://github.com/fangwei716/30-days-of-react-native

import * as React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  YellowBox 
} from 'react-native';

import {
  StackNavigator,
  Header,
} from 'react-navigation';

/*以下插件*/
import Util from '../js/utils';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GridMenuContainer extends React.Component{//<MyNavScreenProps> {
  constructor(props) {
    super(props);
  }
  
  render() {
	var boxs = this.props.data.map(function(elem, index) {
	  return(
	    <TouchableHighlight 
		key={elem.key} 
		style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} 
		underlayColor="#eee" 
		onPress={()=> elem.onPress()} >
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>{elem.title}</Text>
            <Icon size={48} color="#000" name={elem.icon} style={styles.boxIcon}></Icon>
          </View>
        </TouchableHighlight>
	  );
	});
    return (
	  <View style={styles.touchBoxContainer}>
		{boxs}
	  </View>
    )
  }
}

const styles = StyleSheet.create({
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
});
