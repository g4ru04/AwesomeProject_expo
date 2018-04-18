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
import Util from '../js/utils';
import MainMenu from './MainMenu';
import Profile from './Profile';
import Qrcode from './Qrcode';

const HomeScreenStack = StackNavigator({
  Home: { screen: MainMenu },
  Profile: {
    path: 'profile/:name',
    screen: Profile,
  },
  Qrcode: {
    path: 'qrcode/:name',
    screen: Qrcode,
  },
});

export default HomeScreenStack;

