/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  StatusBar,
  TouchableHighlight ,
  PixelRatio
} from 'react-native';

import Header from './components/Header';
import placeImage from './assets/perfil.jpg';
import Content from './components/Content';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Add from './components/Add';
import List from './components/List';
import Icon from 'react-native-vector-icons/Ionicons';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

//type Props = {};



console.disableYellowBox = true;
class TabIcon extends Component {
  render(){
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center',marginTop:5}}>
      
        <Icon style={{color: color}} name={this.props.iconName} size={20}/>
        

        <Text style={{color: color, fontSize: 12}}>{this.props.description}</Text>

      </View>
    
    );
  }

}
export default class App extends Component {
  state= {
    placeImage            
  }

  render() {
    return (
      
      <View style={styles.container}>
      <StatusBar/>
      <Router>
        <Scene key="root" >
          
            <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} default="tab1">
              <Scene 
                     headerBackTitle = " "   
                      title=" "        
                      key = "list"                          
                      description = "Listar"                      
                      iconName="ios-search"                      
                      hideNavBar={true}
                      icon={TabIcon}
                      component={List}
                      initial={true}  
                      showLabel = {false}                                            
              />
              <Scene  
              headerBackTitle = " "           
              title=" "
                      description = "Adicionar"     
                      key = "add"                                                                 
                      iconName="ios-add"
                      icon={TabIcon}
                      hideNavBar={true}
                      component={Add}
                      showLabel = {false}                      
               />
               

              </Scene>
            </Scene>        
      </Router>
    </View>
        
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,        

  },
 
  tabBar: {
      height: 70,

    //marginTop: 2,
    //marginTop:6,        

    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    //backgroundColor: 'ghostwhite',
    
    opacity: 1, 
    
    
  },
  navigationBarStyle: {
    backgroundColor: 'red',
    
    
  },
  navigationBarTitleStyle: {
    color:'white',

    
  },
});