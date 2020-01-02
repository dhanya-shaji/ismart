import React from 'react';    
import {createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack'; 
import Login from './Components/Login'
import Homepage from './Components/Homepage'
import { Provider } from 'react-redux';
import ConfigureStore from './configure/ConfigureStore'
import sagas from './Sagas/index'
const store = ConfigureStore();
store.runSaga(sagas);
const AppNavigator = createStackNavigator(  
    {  
        Login: Login,
        Homepage:Homepage   
    },  
    {  
        initialRouteName: "Login" ,
        mode: 'modal',
        headerMode: 'none', 
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  

class App extends React.Component {

    render() {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      )
    }
  }
  
  export default App