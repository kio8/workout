import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import UserProfile from './UserProfile';

var {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={{top: 30, flex: 1}}>
      <View
        style={{
          marginBottom: 10,
          justifyContent: 'flex-start',
          paddingLeft: 3,
          flex: 0.1,
          zIndex: -3,
        }}>
        <UserProfile
          name="Modupe"
          email="mo@gmail.com"
          image={require('../assests/mo.jpeg')}
        />
        {/* <Text style={{fontWeight: 'bold', fontSize: 25}}> Store</Text> */}
      </View>
      <View style={{flex: 0.85, margin: 10, gap: 10, alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assests/welcome.jpg')}
              resizeMode={'cover'}
              imageStyle={{borderRadius: 10}}
              style={{
                width: width * 0.93,
                height: height * 0.28,
                justifyContent: 'flex-end',
                padding: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#E0F5FE',
                }}>
                Traning Plan
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assests/meal.jpg')}
              resizeMode={'cover'}
              imageStyle={{borderRadius: 10}}
              style={{
                width: width * 0.93,
                height: height * 0.28,
                justifyContent: 'flex-end',
                padding: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#E0F5FE',
                }}>
                Meal Plan
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assests/supplement.jpg')}
              resizeMode={'cover'}
              imageStyle={{borderRadius: 15}}
              style={{
                width: width * 0.93,
                height: height * 0.28,
                justifyContent: 'flex-end',
                padding: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#E0F5FE',
                }}>
                Supplement Plan
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require('../assests/health.jpg')}
              resizeMode={'cover'}
              imageStyle={{borderRadius: 10}}
              style={{
                width: width * 0.93,
                height: height * 0.28,
                justifyContent: 'flex-end',
                padding: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#E0F5FE',
                }}>
                Health Plan
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
