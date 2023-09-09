import {Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const UserProfile = ({image, email, name}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={image}
            resizeMode={'cover'}
            style={{width: 60, height: 60}}
          />
        </View>

        <View style={{justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text style={styles.profile_email}>{email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 20,
    gap: 10,
  },
  image_container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  profile_email: {
    textDecorationLine: 'underline',
  },
});
export default UserProfile;
