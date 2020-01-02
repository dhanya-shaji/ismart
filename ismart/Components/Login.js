import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Login extends React.Component {
  render() {
    return (
      
      <ImageBackground
        style={{ flex: 1 }}
        source={require('./assets/cover.jpg')}
      >
        <View style={styles.MainContainer}>
          <Text style={styles.TextStyle}>Ismart</Text>
          <View style={styles.HomeStyle}>

            <TextInput style={{ width: 250 }} />
            <Icon
              style={styles.icon}
              name="md-arrow-round-forward"
              onPress={() => this.props.navigation.navigate('Homepage')}
              size={35}  
            />
          </View>
        </View>

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20,
  },
  HomeStyle: {
    marginTop: 290,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    borderRadius: 20,
    borderWidth: 1,

  },
  icon:
  {
    width:40,
    height:40,
    borderRadius:25,
    backgroundColor:'lightskyblue',
    color:'white',
    alignItems: 'center',
   
  }
});