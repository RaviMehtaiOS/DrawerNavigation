import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../Command Center/Home'
import NotificationsScreen from '../Other Screens/Notifications'
import SettingsScreen from '../Other Screens/Settings'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

const DrawerContainer = createAppContainer(MyDrawerNavigator);


export default class CommandCenter extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    headerLeft: (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Info"
        color="#fff"
      />
    ),
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DrawerContainer />
    );
  }
}
