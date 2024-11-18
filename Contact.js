import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Contact({ route, navigation }) {
    const {  contact1, contact2 } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.head}>Salva</Text>
            </View>

            <View style={styles.main}>
                
                <View style={styles.c}>
                    <View style={styles.cnt}>
                        <Text style={styles.cntt}>{contact1}</Text>
                    </View>
                    <View style={styles.cnt}>
                        <Text style={styles.cntt}>{contact2}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.call} >
                    <Text style={styles.n} >C A L L</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btm}>
                <TouchableOpacity style={styles.sos} onPress={() => navigation.navigate("Home")}>
                    <Image
                        source={{
                            uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/sos-3438686-2876949.png?f=webp&w=256',
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>SOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loc} onPress={() => navigation.navigate('Location')}>
                    <Image
                        source={{
                            uri: 'https://cdn.iconscout.com/icon/free/png-512/free-location-icon-download-in-svg-png-gif-file-formats--map-pin-navigation-gps-marker-iconly-essential-icons-pack-user-interface-2036087.png?f=webp&w=256',
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>LOCATION</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.con}>
                    <Image
                        source={{
                            uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/contact-161-956816.png?f=webp&w=256',
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>CONTACT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fake}>
                    <Image
                        source={{
                            uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/fake-call-3930695-3260876.png?f=webp&w=256',
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>FAKE CALL</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    call:{
        marginBottom: 10,
        backgroundColor : 'green',
        padding:30,
        paddingLeft : 140,
        paddingRight : 140,
        borderWidth  : 2 ,
        borderColor : 'white',
        borderRadius : 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    top: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    head: {
        fontFamily: 'CustomFont',
        fontSize: 50,
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    n:{
        fontFamily : 'monospace',
        fontSize:20,
        color : 'white'
    },
    
    c: {
        marginBottom: 200,
        alignItems: 'center',
    },
    cnt: {
        marginBottom: 10,
        backgroundColor : 'white',
        padding:30,
        paddingLeft : 140,
        paddingRight : 140,
        borderWidth  : 2 ,
        borderColor : 'purple',
        borderRadius : 20

    },
    cntt: {
        fontSize: 16,
        color: 'black',
    },
    btm: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        borderColor: 'purple',
        borderWidth: 1,
    },
    sos: {
        alignItems: 'center',
    },
    loc: {
        alignItems: 'center',
    },
    con: {
        alignItems: 'center',
    },
    fake: {
        alignItems: 'center',
    },
    icon: {
        height: 50,
        width: 50,
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        color: 'black',
        paddingBottom: 10,
    },
});
