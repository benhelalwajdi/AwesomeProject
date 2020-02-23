/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as firebase from "firebase";
import React from 'react';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import {
  StyleSheet,
  Text,
} from 'react-native';

var config = {
  apiKey: "AIzaSyCo8K7mmdvm85OUfXO1c6NFz8d4Ar9fuT0",
  authDomain: "reactnative-2c39d.firebaseapp.com",
  databaseURL: "https://reactnative-2c39d.firebaseio.com",
  projectId: "reactnative-2c39d",
  storageBucket: "reactnative-2c39d.appspot.com",
  messagingSenderId: "963721597161",
  appId: "1:963721597161:web:62d7a156e6a45fc18ea078",
  measurementId: "G-P9ZHDRX8V5"
};
firebase.initializeApp(config);



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            console.log(user);
          });} catch (error) {
      console.log(error.toString(error));
    }
  };
  Login = (email, password) => {
    try {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            console.log(res.user.email);
          });} catch (error) {
      console.log(error.toString(error));
    }
  };
  render() {
    return (
        <Container>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button full rounded success onPress={() => this.Login(this.state.email, this.state.password)}>
              <Text>Login</Text>
            </Button>

            <Button full rounded success style={{ marginTop: 20 }} onPress={() => this.SignUp(this.state.email, this.state.password)}>
              <Text>Signup</Text>
            </Button>
          </Form>
        </Container>

    );
};
}

