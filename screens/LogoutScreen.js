import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import firebase from 'react-native-firebase';


/*
export default class DetailScreen extends Component{

    render(){
        return(
            <View>
            <Text>========DETAIL ============</Text>
            </View>
        );
    }
}
*/
const LogoutScreen = (props) => {
    let logout = () =>{
        firebase.auth().signOut().then(function() {
            props.navigation.navigator('Auth');

          }, function(error) {
            // An error happened.
            console.log(error);

          });

    }
    return <View>{ logout()}</View>
}


export default LogoutScreen;