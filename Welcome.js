// Welcome.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://static.vecteezy.com/system/resources/previews/024/091/872/non_2x/two-iranian-women-characters-free-png.png" }} 
        style={styles.logo} 
      />
      <Text style={styles.name}>Salva</Text>
      <Text style={styles.c}>A Women Safety App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  c: {
    fontSize: 25, 
    padding: 20
  },
  logo: {
    height: 150, 
    width: 150, 
  },
  name: {
    fontSize: 90,
    paddingTop: 20,
    fontFamily : 'CustomFont'
  },
  button: {
    width: '80%',
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20, 
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
