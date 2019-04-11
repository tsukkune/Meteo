// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  state = {
    currentUser: null,
    latitude: null,
    longitude: null,
    error: null
    
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
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      (error)=>this.setState({error:error.errorMessage}),
      {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
    )
  }

  componentWillUnmount(){
    // realtime position
    // navigator.geolocation.clearWatch(this.watchId)
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

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
      {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="Logout" onPress={this.handleLogOut.bind(this)} />

        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})