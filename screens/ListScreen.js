import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, ScrollView, ActivityIndicator, FlatList,ToastAndroid } from 'react-native';
import { ListItem } from 'react-native-elements';
import { database } from '../util/firebase';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import { today } from '../util/today';
import { configureAuthGoogle } from '../util/auth';
import { GoogleSignin} from 'react-native-google-signin';

export default class ListScreen extends Component {

    state = {
        expenses: [],
        icon: 'ios-trash',
        animating: true,
        
    }


    constructor(props) {

        super(props);
        // this.isLoading = this.isLoading.bind(this);       

    }
    componentWillUnmount() {
        database.off();
        
    }
 
    componentDidMount() {
        
        configureAuthGoogle().then(() => {   
          
        
            GoogleSignin.currentUserAsync().then((user) => {    
                database.child(user.id).orderByChild('date').equalTo(today()).on('value', sn => {
                    const expenses = [];
                    if (sn.val()) {
                        let values = sn.val();
                        let keys = Object.keys(sn.val());
                        for (let i = 0; i < keys.length; i++) {
                            let k = keys[i];
                            let amount = values[k].amount;
                            let description = values[k].description;
                            let dateIn = values[k].date;
                            let id = k;
                            expenses.push({
                                amount: amount,
                                id: k,
                                date: dateIn,
                                description: description
                            })
                        }
                    }
        
                    this.setState({
                        expenses, animating: false
                    });
                    
        
                })
          }).done();           
   
          });
       

    }

    _onSumTotal = () => {
        const amounTotal =(this.state.expenses.map((amount)=>{
                return amount.amount.replace(',','.');
        }));                
        const total = _.reduce(amounTotal,function(sum,n){
            return sum + parseFloat(n,10);
        },0).toFixed(2);        
        return <Text style={styles.textVlTotal}>{today()} - R$ {total.replace('.',',')}</Text>;

    }
    _onDeleteItem = (id) => {
        configureAuthGoogle().then(() => {   
          
        
            GoogleSignin.currentUserAsync().then((user) => {                       

                database.child(user.id).child(id).remove().then(s => {
                    ToastAndroid.show('Item deletado com sucesso!', ToastAndroid.CENTER);
                })
                
          }).done();           
   
          });
    };

    _renderItem = ({ item }) => (
        <ListItem
            id={item.id}
            title={item.description}
            subtitle={item.amount}
            onPress={() => this._onDeleteItem(item.id)}
            rightIcon={<Icon name="ios-trash" size={30} color="red" />}

        />
    );
    _keyExtractor = (item, index) => item.id;
    render() {
        
        
        if (this.state.animating === true) {

            return (
                <View style={styles.content}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        color='#bc2b78'
                        size="large"
                        style={styles.activityIndicator} />
                </View>
            )
        }
        if (_.isEmpty(this.state.expenses) === false) {

            return (
                    <View style={styles.content}>    
                        <View style={styles.valTotal}>                                                                                        
                            {this._onSumTotal()}
                        </View>                        
                        <View style = {styles.GridDespesas}>
                        <ScrollView>      
                                <View style = {styles.grid}>
                                <FlatList 
                                    data={this.state.expenses}                            
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                />
                                </View>
                            </ScrollView>
                        </View>    
                    </View>
             

            )

        }
        else {
            return (
                <View style={styles.content}>
                    <Text>Vazio</Text>
                </View>
            )
        }





    }


}
const styles = StyleSheet.create({
    content: {
        flex: 1,        
    },
    valTotal:{
        backgroundColor:"#009688",
        paddingLeft:5,
        
    },
    textVlTotal:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'


    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    GridDespesas:{
        flex:2,
        backgroundColor:'#ffffff',        
        //flex:2,
        

    }
})