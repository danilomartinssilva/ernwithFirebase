import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { GoogleSigninButton, GoogleSignin} from 'react-native-google-signin';
import { configureAuthGoogle } from '../util/auth';
//import Dashboard from '../Dashboard';


export default class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Login',
      };
    
    state = {
        signedIn:false,
        user:[]
    }
    doLogin = () => {     
      configureAuthGoogle()
            .then(() => {
                GoogleSignin.signIn()
                .then((user) => {               
                    if (user) {
                     this.props.navigation.navigate('Add',{user:user});
                    }
                })
                .catch((err) => {
                    console.log('WRONG SIGNIN', err);
                })
                .done();
            });
 
   }

   componentDidMount() {

 
   }
    render(){
        return(
            
    <GoogleSigninButton
    onPress = { () => this.doLogin()}
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    
    />
  );
  
    }
}