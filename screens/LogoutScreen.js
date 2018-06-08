import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native';
import {createStackNavigator } from 'react-navigation';
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
      firebase.auth().signOut(function(){
          this.props.navigation.navigate('Auth');
      })
    
 }

    
    return <View>{ logout()}</View>
}


export default LogoutScreen;
