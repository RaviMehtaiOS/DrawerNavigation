import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
