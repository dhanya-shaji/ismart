import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './Profile';
import Brands from './Brands';
import Catagory from './Catagory';
import New from './New'
import Home from './Home';
const HomeTab = createStackNavigator(
  {
    Home:Home
  },
  {  
    initialRouteName: "Home" ,
    mode: 'modal',
    headerMode: 'none', 
}  
  );
const CatagoryTab = createStackNavigator(
    {
      Catagory:Catagory
    },);
 const BrandsTab = createStackNavigator(
      {
        Brands:Brands
      },);
const ProfileTab = createStackNavigator(
        {
          Profile:Profile
        },);
const NewTab = createStackNavigator(
          {
            New:New
          },);
   const Homepage = createBottomTabNavigator(
            {
              Home: HomeTab ,
              Catagory:CatagoryTab,
              Brands:BrandsTab,
              Profile:ProfileTab,
              New:NewTab,
            },
            {
              defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                  const { routeName } = navigation.state;
                  if (routeName === 'Home') {
                    return (
                      <Image
                        source={ require('./assets/home.png') }
                        style={{ width: 20, height: 20, }} />);
                  }
                  else if( routeName === 'Catagory')
                  {
                    return (
                       <Image
                        source={ require('./assets/catagory.png') }
                        style={{ width: 20, height: 20, }} />
                    );
                  }
                  else if( routeName === 'Brands')
                  {
                    return (
                       <Image
                        source={ require('./assets/brands.png') }
                        style={{ width: 20, height: 20, }} />
                    );
                  }
                  else if( routeName === 'Profile')
                  {
                    return (
                       <Image
                        source={ require('./assets/profile.png') }
                        style={{ width: 20, height: 20, }} />
                    );
                  }

                  else {
                    return (
                       <Image
                        source={ require('./assets/new.png') }
                        style={{ width: 20, height: 20, }} />
                    );
                  }
                },
              }),
              tabBarOptions: {
                activeTintColor: '#FF6F00',
                inactiveTintColor: '#263238',
              },
            }
   );
  
            export default createAppContainer(Homepage);