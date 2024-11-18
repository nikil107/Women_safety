import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://cdn4.iconfinder.com/data/icons/seo-3d-part-1/256/34_window_login.png" }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetDetails')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
