// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount(){
    const {currentUser} = firebase.auth()
    this.setState({currentUser})
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