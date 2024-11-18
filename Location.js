import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Location({ navigation }) {
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default location
    longitude: -122.4324, // Default location
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.warn('Location permission denied');
        }
      } else {
        getCurrentLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => {
        console.error(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
      >
        <Marker coordinate={region} title={"You are here"} />
      </MapView>

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
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  map: {
    width: '100%',
    height: '100%', 
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
    elevation: 5,
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
