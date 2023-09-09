import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ListDelete from './ListDelete';

const Listplan = ({
  image,
  plantype,
  description,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="whitesmoke" onPress={onPress}>
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
              <Text style={{fontWeight: 'bold'}}>{plantype}</Text>
              <Text style={{textTransform: 'uppercase'}}>{description}</Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 20,
    gap: 15,
  },
  image_container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profile_email: {
    textDecorationLine: 'underline',
  },
});
export default Listplan;
