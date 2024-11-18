import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function GetDetails({ navigation }) {
    const [fontsLoaded] = Font.useFonts({
        'CustomFont': require('./assets/fonts/Cedarville_Cursive/CedarvilleCursive-Regular.ttf'),
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact1, setContact1] = useState('');
    const [contact2, setContact2] = useState('');

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.bg}>
            <Image
                source={{ uri: "https://static.vecteezy.com/system/resources/previews/024/091/872/non_2x/two-iranian-women-characters-free-png.png" }}
                style={styles.logo}
            />
            <Text style={styles.main}>Salva</Text>
            <TextInput
                style={styles.content}
                placeholder="Enter Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.content}
                placeholder="Enter Your Email id"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.content}
                placeholder="Enter Emergency Contact 1"
                value={contact1}
                onChangeText={setContact1}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.content}
                placeholder="Enter Emergency Contact 2"
                value={contact2}
                onChangeText={setContact2}
                keyboardType="phone-pad"
            />
            <TouchableOpacity
                style={styles.bt}
                onPress={() => {
                    navigation.navigate('Home', {
                        name: name,
                        email: email,
                        contact1: contact1,
                        contact2: contact2
                    });
                }}
            >
                <Text style={styles.strt}>Start</Text>
            </TouchableOpacity>

         
            <TouchableOpacity
                style={styles.bt}
                onPress={() => {
                    navigation.navigate('Contact', {
                        name: name,
                        email: email,
                        contact1: contact1,
                        contact2: contact2
                    });
                }}
            >
                <Text style={styles.strt}>Go to Contact</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        padding: 20,
    },
    main: {
        fontSize: 50,
        fontFamily: 'CustomFont',
        marginBottom: 20,
    },
    content: {
        width: '90%',
        fontSize: 18,
        fontFamily: 'CustomFont',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    bt: {
        width: '50%',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    strt: {
        fontFamily: 'monospace',
        fontSize: 20,
    },
});
