import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Salva</Text>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image
            style={styles.imgt}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/049/766/859/non_2x/modern-3d-woman-icon-illustration-for-diversity-and-technology-concepts-free-png.png',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>
          Hello,
          {'\n'}
          Press to activate SOS!!
        </Text>
        <View style={styles.main}>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>🚨 SOS!</Text>
        </TouchableOpacity>
        
      </View>
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

        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Contact')}>
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
  head:{
    fontFamily :'CustomFont',
    fontSize:50,
    paddingRight:240,
    paddingTop : 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  top: {
    alignItems: 'center',
    marginBottom: 70,
  },
  imgt: {
    height: 200,
    width: 200,
    marginBottom: 10,
    marginTop : 0
  },
  introText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'CustomFont',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  main: {
    alignItems: 'center',
    padding : 30
  },
  sosButton: {
    width: 300,
    height: 300,
    borderRadius: 145,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10, 
    borderWidth: 5,
    borderColor: 'white',
  },
  sosText: {
    fontSize: 70,
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
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
    borderColor : 'purple',
    borderWidth  : 1 ,
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
