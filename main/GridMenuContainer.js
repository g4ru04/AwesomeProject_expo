import * as React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {
  StackNavigator,
  Header,
} from 'react-navigation';
import Util from '../js/utils';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GridMenuContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
	var boxs = this.props.data.map(function(elem, index) {
	  return(
	    <TouchableHighlight 
			key={elem.key} 
			style={[
				styles.touchBox,
				index%3==2 ? styles.touchBox2 : styles.touchBox1
			]} 
			underlayColor="#eee" 
			onPress={()=> elem.onPress()} >
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>{elem.title}</Text>
            <Icon size={elem.icon_size} color={elem.icon_color} name={elem.icon} style={styles.boxIcon}></Icon>
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
  touchBox: {
    width: Util.size.width/3 - 0.33334,
    height: Util.size.width/4,
    backgroundColor: "#fff",
  },
  touchBoxContainer: {
    flexDirection: "row", 
    flexWrap: "wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc",
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc",
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: Util.size.width/3,
    height: Util.size.width/4,
  },
  boxIcon: {
    position: "relative",
    top: -6
  },
  boxText: {
    position: "absolute",
    bottom: 10,
    width: Util.size.width/3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },
});
