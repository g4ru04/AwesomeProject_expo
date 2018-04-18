import * as React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  StackNavigator,
  Header,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../js/utils';
import GridMenuContainer from './GridMenuContainer';
import Profile from './Profile';
import Qrcode from './Qrcode';

type MyNavScreenProps = {
  navigation: NavigationScreenProp<*>,
  banner: React.Node,
};

class MainMenu extends React.Component<MyNavScreenProps> {
  
  constructor(props) {
    super(props);
	
    this.state = {
      grid_menu_data:[{
        key: 0,
        title: "Profile",
        component: Profile,
        icon: "user",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			Alert.alert("Press Qrcode");
		},
      },{
		key: 1,
        title: "Qrcode",
        component: Qrcode,
        icon: "qrcode",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			Alert.alert("Press Qrcode");
		},
      },{
		key: 2,
        title: "NotYet",
        component: Qrcode,
        icon: "times",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			//something
		},
      },{
		key: 3,
        title: "NotYet",
        component: Qrcode,
        icon: "times",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			//something
		},
      },{
		key: 4,
        title: "NotYet",
        component: Qrcode,
        icon: "times",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			//something
		},
      },{
		key: 5,
        title: "NotYet",
        component: Qrcode,
        icon: "times",
		icon_size: 48,
        icon_color: "#000",
        onPress: () => {
			//something
		},
      }]
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
			<Text>
				標題
			</Text>
        </View>
        <View style = { styles.contextContainer } >
			<Text>內文</Text>
        </View>
        <View style = { styles.bottomContainer } >
			<GridMenuContainer data = { this.state.grid_menu_data } />
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
	top: 0 ,
	height: Util.size.height - 80 - Util.size.width/2 ,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: 'rgba(0,255,0,0.3)',
  },
  bottomContainer: {
	bottom: 0,
	height: Util.size.width/2,
	justifyContent: 'center',
  },
});

export default MainMenu;
