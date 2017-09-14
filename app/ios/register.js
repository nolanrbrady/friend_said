import login from './home.js';

import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: '',
    };
  }

toLogin(){
  this.props.navigator.pop({component: login})
}

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Register</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({email: email})}
          style={styles.textIn}/>
          <View style={styles.line}></View>
          <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({password: password})}
          secureTextEntry={true}
          style={styles.textIn}/>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={styles.signIn}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signIn2}>
          <Text onPress={this.toLogin.bind(this)}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffb8d4',
  },
  title: {
    paddingTop: 120,
    justifyContent: 'center',

  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'GillSans-SemiBold',
    fontSize: 55,
  },
  line: {
    borderColor: '#dbdbdb',
    borderWidth: 0.5,
    height: 1,
    alignSelf: 'stretch',
  },
  textIn: {
    textAlign: 'center',
    color: 'black',
    height: 25,
    fontSize: 25,
    marginTop: 30,
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  signIn: {
    alignSelf: 'center',
    paddingTop: 20,
  },
  signIn2: {
    alignSelf: 'center',
  },
  btnText:{
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 3,
    width: 150,
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  textInput: {
    paddingTop: 55,
  },
})

export default Register;
