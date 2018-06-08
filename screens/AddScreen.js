import React,{Component} from 'react'
import {View,Text,TextInput,Platform, Keyboard  
    ,StyleSheet,Button,TouchableOpacity,ToastAndroid} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { today } from '../util/today';
import { database } from '../util/firebase';
import firebase from 'react-native-firebase';

export default class AddScreen extends Component{

    constructor(props){
        super(props);    

        this.doSave = this.doSave.bind(this);
        //this.dismiss = this.dismiss.bind(this);        
        this.reset = this.reset.bind(this);
        this.dismiss = this.dismiss.bind(this);
        this.state = {
            description:'',
            amount:'',
            date:today()    

        }
        this.dismiss();
    }
    reset(){
        this.setState({
            description:'',
            amount:'',
            date:today()
        })
    }
    dismiss () {
      
        //console.log("AQUI",this.props.navigation.params.name);
        Keyboard.dismiss();
      }

    doSave(){
        
        const { amount, date, description } = this.state;
        const expense = { amount, date, description }
        const { user } = this.props.navigation.state.params;    
    
        //const token = user.idToken;        
        database.child(user.id).push(expense);        
        
        //const expenses = {description,amount,date};
       // database.child(token).push(expense);                
        //database.push(expense);        

        this.reset();

        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.CENTER);
        }
    render(){
        
        return (
         <View style = {styles.content}>          
            <Text style={styles.textoCabecalho}>Despesas</Text>
            <TextInput 
            placeholder="Gasolina"                 
            underlineColorAndroid="transparent"   
            style = {styles.txField}
            onChangeText = {(description) =>this.setState({description:description.toString()})}
            value = {this.state.description}
             />
        
            <TextInput 
            placeholder="Valor: R$ 10,00"     
            keyboardType="numeric"   
            underlineColorAndroid="transparent"   
            style = {styles.txField}
            onChangeText = {(amount) =>this.setState({amount:amount.toString()})}
            value = {this.state.amount}
             />
             <TextInput 
             placeholder="18/05/2018"        
             underlineColorAndroid="transparent"   
             style = {styles.txField}
             value = {this.state.date}
             onChangeText = {(date) =>this.setState({date})}         
        
              />
           <View style = {styles.btnAction}> 
           <TouchableOpacity>       
           <Icon.Button onPress = {this.reset}name="ios-exit" backgroundColor="#c62828">
               <Text style={{fontFamily: 'Arial', fontSize: 15,color:"#ffffff"}}>Cancelar</Text>
           </Icon.Button>
           </TouchableOpacity>
        
           <TouchableOpacity>       
           <Icon.Button onPress={this.doSave} name="ios-add" backgroundColor="#2E7D32">
               <Text style={{fontFamily: 'Arial', fontSize: 15,color:"#ffffff"}}>Salvar</Text>
           </Icon.Button>
           </TouchableOpacity>
        
        
           </View>
            
        </View>
        )
    }



}

/*
changeHandler = (val) =>{
    console.log(val);
};
*/



const styles = StyleSheet.create({
    content:{
        backgroundColor:"#FFFFFF",
        flex:1
    },
    btnAction:{
        flexDirection:"row",
        justifyContent:"space-around"     
    },
    txField:{
        height:40,
        marginLeft:10        

    },
    btnClear:{
        //background

        
    },
    textoCabecalho:{
        textAlign:"center",
        paddingTop:10,
        fontSize:20

    }



    /*placeImage:{
      //margin:,
      height:35,
      width:50, 
      borderRadius:17.5      
    },*/  
  });
    
//export default add;