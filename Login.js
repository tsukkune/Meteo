// Login.js
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground
} from "react-native";
import firebase from "react-native-firebase";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
    console.log("handleLogin");
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
            <Button style={styles.button} disabled title="Conexion" />
            <Button
              style={styles.button}
              title="Inscription"
              onPress={() => this.props.navigation.navigate("SignUp")}
            />
          </View>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="#BAE8E5"
            placeholderTextColor="#BAE8E5"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            underlineColorAndroid="#BAE8E5"
            placeholderTextColor="#BAE8E5"
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            style={styles.button}
            title="Connexion"
            onPress={this.handleLogin.bind(this)}
          />
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
