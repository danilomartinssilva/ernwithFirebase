import {createSwitchNavigator , createBottomTabNavigator,createStackNavigator,StackNavigator } from 'react-navigation';

/* 
import AuthLoadingScreen from './AuthLoadingScreen';
*/ 
import AppScreen from './AppScreen'; 
import SplashScreen from './screens/SplashScreen';


export default Main = StackNavigator ({
    Splash:{
        screen:SplashScreen,
        navigationOptions:{
            header:null
        }
    },
    App:{
        screen:AppScreen,
        navigationOptions:{
            header:null
        }
    }
  
 
},{

    initialRouteName:'Splash'

});






