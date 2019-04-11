// Main.js
import React from 'react'
import { StyleSheet, Text, View, Button,ActivityIndicator } from 'react-native'
import firebase from 'react-native-firebase'

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
    feeltemp: null,
    humidity: null,
    wind: null,
    visibility: null,
    uv: null
  }

  componentDidMount(){
    const {currentUser} = firebase.auth()

    this.setState({currentUser})

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
      (position)=>{
        this.handleCurrentWeather(position)
      },
      (error)=>this.setState({error:error.errorMessage}),
      {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
    )
  }

  componentWillUnmount(){
    // realtime position
    // navigator.geolocation.clearWatch(this.watchId)
  }

  handleCurrentWeather(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null
    })
    const APIKEY = '6fc55b4061b1483db2e80607191104'
    const BASEWEATHERURL = 'http://api.apixu.com/v1'
    url = BASEWEATHERURL+'/forecast.json?key='+APIKEY+'&lang=fr&q='+this.state.latitude+','+this.state.longitude+'&days=5'
    fetch(url)
      .then(result =>{
        return result.json()
      }).then(data=>{
          this.setState({
            city: data.location.name,
            date: data.location.localtime,
            condition: data.current.condition.text,
            temp: data.current.temp_c,
            feeltemp: data.current.feelslike_c,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
            visibility: data.current.vis_km,
            uv: data.current.uv
          })
      })
  }

  handleLogOut(){
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Loading'))
      .catch(error =>{
        console.log(error.message)
        this.setState({ errorMessage: error.message})
      })
  }
  handleReload(){
    this.setState({
      city: null
    })
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.handleCurrentWeather(position)
      },
      (error)=>this.setState({error:error.errorMessage}),
      {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
    )
  }

  render() {
    const { currentUser } = this.state
    if(!this.state.city){
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      )
    }
    return (
      <View style={styles.container}>
      {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <Text>
         {currentUser && currentUser.email}!
        </Text>
        <Button title="Logout" onPress={this.handleLogOut.bind(this)} />
        <Text> ville: {this.state.city}</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>date: {this.state.date}</Text>
        <Text>condition: {this.state.condition}</Text>
        <Text>temperature: {this.state.temp}</Text>
        <Text>ressenti: {this.state.feeltemp}</Text>
        <Text>humidite: {this.state.humidity}</Text>
        <Text>vent: {this.state.wind}</Text>
        <Text>visibilite: {this.state.visibility}</Text>
        <Text>uv: {this.state.uv}</Text>
        <Button title="reload" onPress={this.handleReload.bind(this)} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
})