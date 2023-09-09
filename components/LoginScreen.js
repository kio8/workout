import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const LoginScreen = () => {
  const [Username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState('LOG IN');

  const handlePress = () => {
    if (loading == 'LOG IN') {
      setloading('IN');
    } else {
      setloading('LOG IN');
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 15,
        }}>
        <Text style={{fontWeight: '900', fontSize: 60}}> Get Fit </Text>
        <Text style={{fontWeight: '900', fontSize: 60}}> Plan</Text>
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1D9BF0',
        }}>
        <Text style={styles.text}> Full Name/Email </Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
          type={Username}
          placeholder="Name/Email"
        />

        <Text style={styles.text}> Password</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
          type={password}
          placeholder="create a password"
        />

        <View style={styles.signUpBTN}>
          <Button title={loading} color="white" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D9BF0',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: 32,
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpBTN: {
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 15,
    marginTop: 10,
  },
});

export default LoginScreen;
