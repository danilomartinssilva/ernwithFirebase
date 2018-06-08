import React, {Component} from 'react';
import {Text,View, 
    StyleSheet,
    TextInput,
     TouchableOpacity,
     ActivityIndicator,
     Platform,
     Button} from 'react-native';     
import { createStackNavigator } from 'react-navigation';
import { GoogleSigninButton, GoogleSignin} from 'react-native-google-signin';
import { configureAuthGoogle } from '../util/auth';

import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';
//import Dashboard from '../Dashboard';


export default class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Login',
      };
    
      state={
        email:'',
        senha:'',        
    }
    constructor(props){
        super(props);


    }
    doLoginWithEmailAndSenha=async ()=>{
        try{
            const data = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.senha);
            if(data.user.uid){
                this.props.navigation.navigate('Add',{user:data.user});    
            }
        }
        catch(e){
            console.log(e);
        }

    }
    doLogin = async () => {     
    //   configureAuthGoogle()
    //         .then(() => {
    //             GoogleSignin.signIn()
    //             .then((user) => {               
    //                     //console.log(user);
    //                     const credential = firebase.auth.GoogleAuthProvider.credential(user.idToken,user.accessToken);

                            
    //                     })    
    //                 // if (user) {
    //                 //  this.props.navigation.navigate('Add',{user:user});                     
    //                 // }
    //             })
    //             .catch((err) => {
    //                 console.log('WRONG SIGNIN', err);
    //             })
    //             .done();
    //         });
        try{
            await  GoogleSignin.configure();
            const data = await GoogleSignin.signIn();
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
            const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
            if(currentUser.user.uid){
                this.props.navigation.navigate('Add',{user:currentUser.user});                     
            }
        }
        catch(e){
            console.error(e);
        }
 
   }

   componentDidMount() {

   }
    render(){
        return(
            
            <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style={styles.txHeader}>Sign in</Text>
                <Text style={styles.txHeader}>Sign up</Text>
            </View>
            <View style = {styles.main}>
                <View style={styles.form}>
                <TextInput
                underlineColorAndroid="transparent"  
                placeholder = "Email"
                onChangeText = {(email)=>this.setState({email})}                                          

                style={styles.txInput}
                />
                <TextInput
                underlineColorAndroid="transparent"  
                onChangeText = {(senha)=>this.setState({senha})} 
                placeholder = "Senha" 
                style={styles.txInput}
                secureTextEntry={true}
                />
                </View> 
                <View style={styles.viewButtons}>

                <TouchableOpacity>
                    <Icon.Button name="ios-log-in" backgroundColor="#1B5E20" onPress={ () =>this.doLoginWithEmailAndSenha()}>
                        <Text style={{fontFamily: 'Arial', fontSize: 15,color:'#ffffff',width:90,textAlign:'center'}}>Sign In</Text>
                    </Icon.Button>                                    
                </TouchableOpacity>

                <TouchableOpacity>                                            
                <Icon.Button onPress={()=>this.doLogin()} name="logo-google" backgroundColor="#f44336">
                     <Text style={{fontFamily: 'Arial', fontSize: 15,color:'#ffffff'}}>Login Google</Text>
                </Icon.Button>
                </TouchableOpacity>
                </View>                
            
            </View>
            <View style = {styles.footer}>
            
            </View>
        </View>
            
  );
  
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#283593",
        flexDirection:'column'
    },
    txInput:{
    
        height:40,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:8,
        //height:40,
        margin:10,
        
    },
    txHeader:{
        fontSize:30,
        fontFamily:'Cochin',
        
        //paddingBottom:2
    
    
    },
    form:{
        flex:2,    
        flexDirection:'column',
        justifyContent:'space-around',
    },
    viewButtons:{
        flexDirection:'column',
        justifyContent:'space-around',
        flex:3,    
        alignItems:'center'
    },
    main:{
        flex:3,
        flexDirection:'column',
        backgroundColor:"#ffffff",
    },
    
    footer:{
        flex:1,
        backgroundColor:"#F5F5F5",
    },
    header:{
        flex:2,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#F5F5F5",
        alignItems:'flex-end',
        paddingBottom:4   
    }
    
    
    })