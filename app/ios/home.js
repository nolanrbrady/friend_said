import register from './register.js';

import React, { Component } from 'react';
import{
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      email: "",
      password: ""
    };
  }

signIn(){

}
register(){
  this.props.navigator.push({component: register});
}

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Bûm</Text>
        <View style={styles.form}>

          <TextInput
          placeholder = "Email"
          value = {this.state.email}
          onChangeText = {(email) => this.setState({email: email})}
          style= {styles.textIn}/>

          <TextInput
          placeholder = "Password"
          value = {this.state.password}
          onChangeText = {(password) => this.setState({password: password})}
          secureTextEntry = {true}
          style={styles.textIn}/>

          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.btnText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn2}>
            <Text onPress={this.register.bind(this)}>New Here?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb8d4',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    paddingTop: 120,
    fontFamily: 'georgia',
    fontSize: 85,
    fontFamily: 'GillSans-SemiBold',
  },
  textIn: {
    textAlign: 'center',
    height: 25,
    fontSize: 25,
    marginTop: 30,
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  form: {
    paddingTop: 35,
  },
  signIn: {
    alignSelf: 'center',
    paddingTop: 20,
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
  signIn2: {
    alignSelf: 'center',
  },
})

export default Home;
