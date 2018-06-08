import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { configureAuthGoogle } from '../util/auth';
import { GoogleSignin} from 'react-native-google-signin';
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
const DetailScreen = (props) => {
    let logout = () =>{
      firebase.auth().signOut(function(){
          this.props.navigation.navigate('Auth');
      })
    
 }

    
    return <View>{ logout()}</View>
}


export default DetailScreen;