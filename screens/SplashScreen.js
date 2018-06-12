import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class SplashScreen extends Component{

 
    componentWillMount(){
        setTimeout(()=>{
          this.props.navigation.navigate('App');                  

        },4000);
    }
    render(){        

        return(
            <View style={styles.container}>
            <Image
            style={styles.center} 
            source={require('../assets/logoSistema.png')}
             />

            </View>

        )
    }
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'



    }
});    