
import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      email: "",
      password: ""
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the home page</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    paddingTop: 70,
    textAlign: 'center',
  },
})

export default Home;
