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
} from 'react-native';

var {width, height} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: 19,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <View style={{marginBottom: 10, marginLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}> Store</Text>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 10,
              // width: 'maxWidth',

              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
                width: width * 0.93,
                height: height * 0.23,
                backgroundColor: '#015C9B',
                borderRadius: 8,
                paddingBottom: 25,
                // paddingLeft: 25,
                zIndex: -4,
              }}>
              {/* <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    // height: height * 4,
                    width: windowWidth - 25,
                    borderWidth: 2,
                    borderColor: '#000',
                  }}>
                  <Image
                    source={require('../assests/workout1.png')}
                    style={{
                      // flex: 1,
                      resizeMode: 'contain',
                      width: '80%',
                      height: 400,
                    }}
                  />
                </View> */}

              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  paddingLeft: 20,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#E0F5FE',
                  }}>
                  Training Plan
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                // width: 'maxWidth',

                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  width: width * 0.93,
                  height: height * 0.23,
                  backgroundColor: '#EE5B98',
                  borderRadius: 8,
                  paddingBottom: 25,
                  paddingLeft: 25,
                }}>
                <Text style={[styles.cardText]}>Meal Plan</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                // width: 'maxWidth',

                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  width: width * 0.93,
                  height: height * 0.23,
                  backgroundColor: '#02030C',
                  borderRadius: 8,
                  paddingBottom: 25,
                  paddingLeft: 25,
                }}>
                <Text style={[styles.cardText]}>Supplement Plan</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                // width: 'maxWidth',

                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  width: width * 0.93,
                  height: height * 0.23,
                  backgroundColor: '#FF822C',
                  borderRadius: 8,
                  paddingBottom: 25,
                  paddingLeft: 25,
                }}>
                <Text style={[styles.cardText]}>Health Plan</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{height: 250}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 100,

    marginTop: 10,
    borderRadius: 5,
  },
  body: {},
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#E0F5FE',
  },
  // scrollViewContent: {
  //   alignItems: 'center',
  //   // paddingBottom: 10,
  // },
});

export default HomeScreen;

<View
  style={{
    flex: 1,
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginTop: 20,
    width: 400,

    zIndex: -1,
  }}>
  <Image
    source={require('../assests/workout1.png')}
    style={{
      position: 'absolute',
      width: 100,
      height: '200%',
      resizeMode: 'cover',
      overflow: 'hidden',
      // marginLeft: 170,
    }}
  />
</View>;
