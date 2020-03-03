import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'left',
    margin: 40,
    fontFamily: 'Noto Sans',
  },
  boxTop: {
    width: 380,
    height: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    color: '#fff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 20,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  boxTopText: {
    fontSize: 24,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <View style={styles.boxTop}>
        <Text style={styles.boxTopText}>Abaixo</Text>
      </View>

      <View style={styles.boxTop}>
        <Text style={styles.boxTopText}>Abaixo</Text>
      </View>

      <View style={styles.boxTop}>
        <Text style={styles.boxTopText}>Abaixo</Text>
      </View>
    </View>
  );
}
