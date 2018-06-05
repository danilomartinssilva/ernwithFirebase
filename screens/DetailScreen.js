import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { configureAuthGoogle } from '../util/auth';
import { GoogleSignin} from 'react-native-google-signin';

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
        configureAuthGoogle().then(()=>{
            GoogleSignin.signOut();
            props.navigation.navigate('Login');

        })  .catch((err) => {
            console.log('WRONG SIGNIN', err);
        }).done();

    }
    return <View>{ logout()}</View>
}


export default DetailScreen;