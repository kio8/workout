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

import CustomIcon from './components/CustomIcon';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {/* <StatusBar />
          <Homescreen /> */}
          <Welcomescreen />
          {/* <SignUpScreen /> */}
          {/* <LoginScreen /> */}
          {/* <PlansScreen /> */}
          {/* <CustomIcon
            name="email"
            size={50}
            backgroundColor="black"
            Color="white"
          /> */}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
