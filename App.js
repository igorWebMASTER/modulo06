import React, { Component } from 'react';
import { Platform, View ,  Text, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Google Drive</Text>
        <Text style={styles.welcome}></Text>
        <View style={styles.boxTop}>
         <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: '#F5FCFF'
   },
   welcome: {
     fontSize: 30,
     textAlign: 'left',
     margin: 40,
     fontFamily: 'Noto Sans',
   },
   boxTop: {
     width: 400,
     height: 200,
     backgroundColor: 'blue',
     borderRadius: 10,
     color: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  },
});
