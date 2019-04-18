// SignUp.js
import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
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
      <View style={styles.container}>
        <Text style={styles.appTitle}>MÉTÉO</Text>
        <View style={styles.buttonView}>
          <Button
            style={styles.button}
            title="Connexion"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Button style={styles.button} disabled title="Inscription" />
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
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "30%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    marginTop: 8
  },
  appTitle: {
    fontSize: 32
  },
  button: {},
  buttonView: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  }
});
