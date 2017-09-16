import firebase from '../config/firebase.js';
import dashboard from './dashboard.js';

import React, {Component} from 'react';
import{
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class userInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bio: '',
      location: '',
      email: '',
    }
  }

  submit(){
    var state = this;
    var uid = firebase.auth().currentUser.uid;
    firebase.database().ref('profile/' + uid).set({name: this.state.name, bio: this.state.bio, location: this.state.location});
    this.props.navigator.push({ component: dashboard });
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Tell Us</Text>
          <Text style={styles.text}>About You</Text>
        </View>
        <View style={styles.form}>
          <TextInput
          placeholder="Your Name"
          style= {styles.textIn}
          value = {this.state.name}
          onChangeText={(name) => this.setState({name:name})}/>
          <View style={styles.line}></View>
          <TextInput
          placeholder = "Your Email"
          style={styles.textIn}
          value = {this.state.email}
          onChangeText = {(email) => this.setState({email: email})}/>
          <View style={styles.line}></View>
          <TextInput
          placeholder="Tell Us About Yourself"
          style= {styles.textIn}
          value = {this.state.bio}
          onChangeText = {(bio) => this.setState({ bio:bio })}
          multiline = {true}/>
          <View style={styles.line}></View>
          <TextInput
          placeholder = "Where are you: New York, NY"
          style= {styles.textIn}
          value = {this.state.location}
          onChangeText = {(location) => this.setState({location: location})}
          />
          <View style={styles.line}></View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.submit}>
            <Text onPress={this.submit.bind(this)} style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffb8d4',
  },
  line: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 1,
    alignSelf: 'stretch',
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
  btn: {
    paddingTop: 30,
  },
  title: {
    justifyContent: 'center',
    paddingTop: 75,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Didot-Bold',
    fontSize: 55,
  },
  textIn: {
    textAlign: 'center',
    color: 'black',
    height: 30,
    fontSize: 25,
    marginTop: 20,
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  submit: {
    alignSelf: 'center',
  },
  form: {
    paddingTop: 30,
  }
})

export default userInfo;
