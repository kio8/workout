import React from 'react';
import {
  Veiw,
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
const handlePress = () => {
  {
    console.log('tap');
  }
};
const handlePressS = () => {
  {
    console.log('tapS');
  }
};
const Welcomescreen = () => {
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../assests/welcome.jpg')}>
      <View
        style={{
          alignSelf: 'flex-start',
          padding: 30,
          flex: 0.8,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 35,
            marginBottom: 5,
          }}>
          Supplements
        </Text>
        <Text style={{color: 'white', fontSize: 15}} numberOfLines={3}>
          Workout plans designed to help you achieve your fitness goals -
          whether losing weight or building muscle
        </Text>
      </View>
      <View
        style={{
          //   flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 15,
          //   position: 'relative',
        }}>
        <TouchableOpacity onPress={handlePress}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'white',
              width: 120,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Log in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressS}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'white',
              width: 120,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Welcomescreen;
