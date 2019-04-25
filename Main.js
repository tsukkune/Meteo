// Main.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import firebase from "react-native-firebase";
import DetailsCard from "./Components/DetailsCard";

export default class Main extends React.Component {
  state = {
    currentUser: null,
    latitude: null,
    longitude: null,
    error: null,
    city: null,
    date: null,
    condition: null,
    temp: null,
    min: null,
    max: null,
    feeltemp: null,
    humidity: null,
    wind: null,
    visibility: null,
    uv: null
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });

    //realtime position
    // this.watchId = navigator.geolocation.watchPosition(
    //   (position) => {
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       error: null,
    //     });
    //   },
    //   (error) => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    // );

    navigator.geolocation.getCurrentPosition(
      position => {
        this.handleCurrentWeather(position);
      },
      error => this.setState({ error: error.errorMessage }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentWillUnmount() {
    // realtime position
    // navigator.geolocation.clearWatch(this.watchId)
  }

  handleCurrentWeather(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null
    });
    const APIKEY = "6fc55b4061b1483db2e80607191104";
    const BASEWEATHERURL = "http://api.apixu.com/v1";
    url =
      BASEWEATHERURL +
      "/forecast.json?key=" +
      APIKEY +
      "&lang=fr&q=" +
      this.state.latitude +
      "," +
      this.state.longitude +
      "&days=5";
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          city: data.location.name,
          date: data.location.localtime,
          condition: data.current.condition.text,
          temp: data.current.temp_c,
          min: data.forecast.forecastday[0].day.mintemp_c,
          max: data.forecast.forecastday[0].day.maxtemp_c,
          feeltemp: data.current.feelslike_c,
          humidity: data.current.humidity,
          wind: data.current.wind_kph,
          visibility: data.current.vis_km,
          uv: data.current.uv
        });
      });
  }

  handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate("Loading"))
      .catch(error => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }
  handleReload() {
    this.setState({
      city: null
    });
    navigator.geolocation.getCurrentPosition(
      position => {
        this.handleCurrentWeather(position);
      },
      error => this.setState({ error: error.errorMessage }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const { currentUser } = this.state;
    if (!this.state.city) {
      return (
        <ImageBackground
          source={require("./img/img-maquette-07.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ActivityIndicator
            animating={true}
            style={styles.indicator}
            size="large"
          />
        </ImageBackground>
      );
    }
    return (
      <ImageBackground
        source={require("./img/img-maquette-07.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}

          <Text>Connécter en tant que: {currentUser.email}</Text>
          <Button
            title="Se deconnecter"
            onPress={this.handleLogOut.bind(this)}
          />
          <Text> ville: {this.state.city}</Text>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          <Text>date: {this.state.date}</Text>
          <Text>condition: {this.state.condition}</Text>

          <DetailsCard
            uv={this.state.uv}
            visibility={this.state.visibility}
            wind={this.state.wind}
            humidity={this.state.humidity}
            feeltemp={this.state.feeltemp}
            temp={this.state.temp}
            min={this.state.min}
            max={this.state.max}
          />

          <Button title="Actualiser" onPress={this.handleReload.bind(this)} />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80
  }
});
