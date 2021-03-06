import {createSwitchNavigator , createBottomTabNavigator,createStackNavigator } from 'react-navigation';

import AddScreen from './screens/AddScreen';
import ListScreen from './screens/ListScreen';
import LoginScreen from './screens/LoginScreen';
import DetailScreen from './screens/DetailScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AuthLoadingScreen from './AuthLoadingScreen';
import React, {Component} from 'react';

const AuthStack = createStackNavigator ({
    Login:LoginScreen
});

const AppStack = createBottomTabNavigator ({

    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            tabBarLabel: 'Detalhe',          
              
            tabBarIcon: (<Icon name="ios-exit" size={30} />)
        }
    },
    Add: {
        screen: AddScreen,
        navigationOptions: {
            tabBarLabel: 'Adicionar',
            tabBarIcon: (<Icon name="ios-add" size={30} />)
        }
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarLabel: 'Listar',
            tabBarIcon: (<Icon name="ios-search" size={30} />)
        }
    }

}, {
        initialRouteName: 'Add',
        order: ['List', 'Add', 'Detail'],
        navigationOptions: {
        tabBarVisible: true
        }
});
export default createSwitchNavigator ({
    AuthLoading: AuthLoadingScreen,
    App:AppStack,
    Auth:AuthStack
},{
    initialRouteName:'AuthLoading'
});





