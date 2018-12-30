/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CommandCenterScreen from './Resources/Screens/Command Center/CommandCenter'
import HomeScreen from './Resources/Screens/Command Center/Home'
import LoginScreen from './Resources/Screens/Authentication/Login'
import SignupScreen from './Resources/Screens/Authentication/Signup'
import ForgotPasswordScreen from './Resources/Screens/Authentication/ForgotPassword'
import ResetPasswordScreen from './Resources/Screens/Authentication/ResetPassword'
import ChangePasswordScreen from './Resources/Screens/Authentication/ChangePassword'
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
    ResetPassword: ResetPasswordScreen,
    ChangePassword: ChangePasswordScreen,
    CommandCenter: CommandCenterScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
