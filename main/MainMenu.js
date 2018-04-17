
// refer to https://github.com/fangwei716/30-days-of-react-native

import * as React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  YellowBox 
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';

import Util from '../js/utils';
import GridMenuContainer from './GridMenuContainer';
import Profile from './Profile';
import Qrcode from './Qrcode';

/*Pre Setting*/
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Remote debugger']);

type MyNavScreenProps = {
  navigation: NavigationScreenProp<*>,
  banner: React.Node,
};

class MainMenu extends React.Component<MyNavScreenProps> {
  static navigationOptions = {
    title: 'Welcome',
	headerStyle:{
		//height:0,
	}
  };
  onPress1 = () => {
	  Alert.alert("Press Profile1")
  }
  constructor(props) {
    super(props);
	
    this.state = {
      grid_menu_data:[{
        key: 0,
        title: "Profile",
        component: Profile,
        icon: "user",
        onPress: this.onPress1,
      },{
		key: 1,
        title: "Qrcode",
        component: Qrcode,
        icon: "qrcode",
        onPress: () => {
			Alert.alert("Press Qrcode");
		},
      },{
		key:2,
        title:"NotYet",
        component: Qrcode,
        icon: "times",
        onPress: () => {
			//something
		},
      },{
		key:3,
        title:"NotYet",
        component: Qrcode,
        icon: "times",
        onPress: () => {
			//something
		},
      },{
		key:4,
        title:"NotYet",
        component: Qrcode,
        icon: "times",
        onPress: () => {
			//something
		},
      },{
		key:5,
        title:"NotYet",
        component: Qrcode,
        icon: "times",
        onPress: () => {
			//something
		},
      }]
    }
  }
  componentWillMount() {
    //Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    //Orientation.lockToPortrait();
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
			<Text>
				標題
			</Text>
        </View>
        <View style={styles.contextContainer}>
			<Text>內文</Text>
        </View>
        <View style={styles.bottomContainer}>
			<GridMenuContainer data={this.state.grid_menu_data} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
	  marginTop: 0,
	  width: Util.size.width,
	  height: Util.size.height - 0,
	  flex:1,
  },
  topContainer:{
	top: 0,
	height: 80,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'rgba(255,0,0,0.3)',
  },
  contextContainer:{
	height: Util.size.height -0 -80 - (Util.size.width*2 /3),
	top: 0 ,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: 'rgba(0,255,0,0.3)',
  },
  bottomContainer: {
	//marginTop: 0,
	justifyContent: 'center',
	bottom:0,
    height: Util.size.width*2 /3,
  },
});
export default MainMenu;
