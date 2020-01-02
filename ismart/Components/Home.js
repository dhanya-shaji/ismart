import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Ismart_home from './Ismart_home'

export default class settings extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  
class WelcomeScreen extends Component {  
    static navigationOptions = {  
         title: 'Welcome',  
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>WelcomeScreen</Text>  
                <Button  
                    title="Go to DashboardScreen"  
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                />  
            </View>  
        );  
    }  
}  
  

const ismart_home= createStackNavigator(  
    {  
        Ismart_home: Ismart_home  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10,color:'white' }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            ) ,
            
        };  
        }  
    }  
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: WelcomeScreen  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    ismart_home: {  
        screen:ismart_home  
    },  
    Welcome: {  
        screen: WelcomeStackNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    ismart_home: { screen: AppDrawerNavigator },  
    Welcome: { screen: WelcomeScreen },  
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  