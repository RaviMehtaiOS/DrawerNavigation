import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
    this.methodMoveToSignup = this.methodMoveToSignup.bind(this);
    this.methodMoveToForgotPassword = this.methodMoveToForgotPassword.bind(this);
    this.methodMoveToResetPassword = this.methodMoveToResetPassword.bind(this);
    this.methodMoveToCommandCenter = this.methodMoveToCommandCenter.bind(this);
  }

  /*
      CUSTOM METHODS
  */

  methodMoveToSignup = () => {
    this.props.navigation.navigate('Signup')
  }

  methodMoveToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword')
  }

  methodMoveToResetPassword = () => {
    this.props.navigation.navigate('ResetPassword')
  }

  methodMoveToCommandCenter = () => {
    this.props.navigation.navigate('CommandCenter')
  }
  
  
  /*
      LIFE CYCLE METHODS
  */

  render() {
    return (
      <View style = {{flex: 1, flexDirection: 'column'}}>

        <View style = {{flex: 0.25, backgroundColor: 'red'}}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.methodMoveToSignup()}>
              <Text style={{color: 'white', fontSize: 25}}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {{flex: 0.25, backgroundColor: 'blue'}}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.methodMoveToForgotPassword()}>
              <Text style={{color: 'white', fontSize: 25}}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {{flex: 0.25, backgroundColor: 'red'}}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.methodMoveToResetPassword()}>
              <Text style={{color: 'white', fontSize: 25}}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {{flex: 0.25, backgroundColor: 'blue'}}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.methodMoveToCommandCenter()}>
              <Text style={{color: 'white', fontSize: 25}}>Command Center</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
