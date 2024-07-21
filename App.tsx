import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Homescreen from './components/Homescreen';
import Listplan from './components/Listplan';
import LoginScreen from './components/LoginScreen';
import PlansScreen from './components/PlansScreen';
import SignUpScreen from './components/SignUpScreen';
import StatusBar from './components/StatusBar';
import UserProfile from './components/UserProfile';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Welcomescreen from './components/Welomescreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {requireNativeComponent} from 'react-native';

import CustomIcon from './components/CustomIcon';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="screen"
              component={Welcomescreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              // options={{headerShown: false}}
            />
            {/* <View style={styles.container}> */}
            {/* <StatusBar /> */}
            {/* <Homescreen /> */}
            {/* <Welcomescreen /> */}
            {/* <SignUpScreen /> */}
            {/* <LoginScreen /> */}
            {/* <PlansScreen /> */}
            {/* <CustomIcon
          name="email"
          size={50}
          backgroundColor="black"
          Color="white"
        /> */}
            {/* </View> */}
          </Stack.Navigator>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,

    backgroundColor: '#0B0C0E',
  },
});
export default App;
