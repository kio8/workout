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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomIcon = ({
  Color = 'white',
  backgroundColor = '#000',
  size = 40,
  name,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        marginLeft: 5,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} size={30} borderRadius={size / 2} color={Color} />
    </View>
  );
};

export default CustomIcon;
