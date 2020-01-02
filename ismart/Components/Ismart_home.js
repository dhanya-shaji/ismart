
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, ImageBackground } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Searchbar } from 'react-native-paper';
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import {Ismart_home_Action} from '../Actions/index';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];
export class Ismart_home extends Component {
  static navigationOptions = {
    title: 'ismart',
    headerTintColor: '#fff',  
    headerStyle: {
      backgroundColor: '#4169e1',
    },
    headerTitleStyle: {  
      fontWeight: 'bold', 
      fontSize:30, 
   },  
    headerRight: (
      <View style={{flexDirection: "row",justifyContent: "space-evenly",width: 120}}>
        <Icon style={{color:'white'}} size={30} name="md-camera"/>
        <Icon style={{color:'white'}} size={30} name="md-notifications" />
        <Icon style={{color:'white'}} size={30} name="md-cart"/>
      </View>
    )
  };
  constructor(props) {
    super(props);
    
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        //require('./assets/images/girl.jpg'),
      ],

      data: data
    };
    this.props.Splashrequest();
  }
  
 
  render() {
    console.log("propsz",this.props)
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ImageBackground
            style={{ flex: 1 }}
            source={require('./assets/bg.jpg')}
          >
            <View style={{marginRight:5,marginLeft:5}}>
              <Searchbar
                style={{ marginTop: 5 }}
                placeholder="Search products"
                onChangeText={query => { this.setState({ firstQuery: query }); }}
                value={firstQuery}
              />
              {this.props.Splashresponse.length === 0 && <Text>Loading...</Text>}
            {this.props.Splashresponse.length > 0 && (
               <div>
             {this.props.Splashresponse.map((item) => (
              <SliderBox
                images={item.images}
                onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={15}
                autoplay
                circleLoop
              />
              ))}
              </div>
            )}
            </View>
            <View>
              <Text style={styles.TextStyle}>Newly Added</Text>
              <FlatList
                horizontal
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                  return (
                    <Card
                      title={null}
                      image={{ uri: rowData.imageUrl }}
                      containerStyle={{ padding: 0, width: 120 }}
                    >
                      <Text style={{ marginBottom: 10 }}>
                        {rowData.title}
                      </Text>
                    </Card>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View>
              <Text style={styles.TextStyle}>Recently searched</Text>
              <FlatList
                horizontal
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                  return (
                    <Card
                      title={null}
                      image={{ uri: rowData.imageUrl }}
                      containerStyle={{ padding: 0, width: 120 }}
                    >
                      <Text style={{ marginBottom: 10 }}>
                        {rowData.title}
                      </Text>
                    </Card>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    marginHorizontal: 10,
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
 
});

const mapStateToProps = (state) => ({
    Splashresponse: state.Home.Splashresponse  
})
const mapDispatchToProps = {
    ...Ismart_home_Action
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Ismart_home);
