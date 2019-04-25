// SignUp.js
import React from "react";
import { Button } from "react-native-elements";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground
} from "react-native";
import firebase from "react-native-firebase";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email.trim(),
        this.state.password
      )
      .then(() => this.props.navigation.navigate("main"))
      .catch(error => this.setState({ errorMessage: error.message }));
    console.log("handleSignUp");
  };
  render() {
    return (
      <ImageBackground
        source={require("./img/img-maquette-02.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.appTitle}>MÉTÉO</Text>
          <View style={styles.buttonView}>
            <Button
              style={styles.button}
              title="Connexion"
              type="clear"
              onPress={() => this.props.navigation.navigate("Login")}
            />
            <Button
              style={styles.button}
              disabled
              title="Inscription"
              type="clear"
            />
          </View>

          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}

          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            underlineColorAndroid="#BAE8E5"
            placeholderTextColor="#BAE8E5"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            underlineColorAndroid="#BAE8E5"
            placeholderTextColor="#BAE8E5"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="S'inscrire" onPress={this.handleSignUp.bind(this)} />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    color: "#BAE8E5",
    marginTop: 8
  },
  appTitle: {
    fontSize: 32,
    color: "#fff"
  },
  button: {},
  buttonView: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  }
});
