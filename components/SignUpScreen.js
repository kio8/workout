import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const SignUpScreen = () => {
  const [text, setText] = React.useState('');
  const [password, setpassword] = React.useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          // flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -40,
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 60,
            textAlign: 'center',
          }}>
          Get Fit{' '}
        </Text>
        <Text style={{fontWeight: '900', fontSize: 60}}> Plan</Text>
      </View>

      <Text style={styles.text}> Full Name/Email </Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        type={text}
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
      <Text style={styles.text}> Verify Password </Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        type={password}
        placeholder="this must match above password"
      />
      <View style={styles.signUpBTN}>
        <Button title="SIGN UP" color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default SignUpScreen;
