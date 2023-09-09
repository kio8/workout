import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AntdesignIcon from 'react-native-vector-icons/AntDesign';

const StatusBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0.07,
        marginRight: 15,
        marginTop: 10,
        gap: 20,
      }}>
      <TouchableOpacity>
        <Icon name="bell" size={15} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default StatusBar;
