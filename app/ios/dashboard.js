

import React, {Component} from 'react';
import{
  Text,
  View,
  StyleSheet,
} from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Dashboard</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  banner: {
    height: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  bannerText: {
    textAlign: 'center',
    fontFamily: 'Didot-Bold',
    fontSize: 45,
  }
})

export default Dashboard;
