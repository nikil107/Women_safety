// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import SignIn from './SignIn';
import Home from './Home';
import Location from './Location';
import Contact from './Contact';
import GetDetails from './GetDetails';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name = "Contact" component={Contact} options={{headerShown:false}} />
        <Stack.Screen name='GetDetails' component={GetDetails} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
