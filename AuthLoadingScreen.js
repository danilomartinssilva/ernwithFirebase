import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { GoogleSigninButton,GoogleSignin} from 'react-native-google-signin';
import { configureAuthGoogle } from './util/auth';
import firebase from 'react-native-firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);  

  }  
  componentDidMount(){
  const  { navigate } = this.props.navigation;     
   /*  configureAuthGoogle().then(() => {   
          
          GoogleSignin.currentUserAsync().then((user) => {                       

                  if(user){                    
                    navigate('Add',{user:user});                   
                  }
                  else{
                    navigate('Auth');
                  }       
        }).done();           
 
        }); */
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            navigate('Add',{user:user});       
          }
          else{
            navigate('Auth');
          }
        })
  }


  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({

})