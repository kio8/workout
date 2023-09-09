import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListDelete = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FB5B73',
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListDelete;
