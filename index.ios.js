import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Header } from './app/components';
import Home from './app/routes/Home/Home.js';

var {height, width} = Dimensions.get('window');

import MapView from 'react-native-maps';

export default class foodTrucks extends Component {
    constructor(props){
    super(props);
    this.state ={
      region: {
          latitude: 39.739236,
          longitude: -104.990251,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
      },
      markers: [{
        title: 'Greetings',
        image: require('./images/icons/truck.png'),
        description: 'this is the food you are looking for',
        coordinates: {
          latitude: 39.739236,
          longitude: -104.990251
          },
        },
      {
        title: 'Greetings',
        image: require('./images/icons/truck.png'),
        description: 'this is the food you are looking for',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449
        },  
      }]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }

  renderHeader(){
    return <Header />
  }

  renderContent(){
    return <Home />
  }

  render() {
    return (
      <View style={styles.container}>
       <MapView style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
      {this.state.markers.map((marker, i) => (
        <MapView.Marker
          key={i}
          image={marker.image}
          coordinate={marker.coordinates}
          title={marker.title}
          description={marker.description}
        >
          <MapView.Callout>
            <View style={styles.callout}>
              <Image style={styles.calloutPhoto} source={marker.image}/>
              <Text style={styles.calloutTitle}>{marker.title}</Text>
              <Text>{marker.description}</Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
        ))}
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  callout: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginBottom: 10
  },
  calloutPhoto: {
    flex: 1,
    width: 166,
    height: 75
  },
  calloutTitle: {
    fontSize: 16,
  },
  map: {
    height: height,
    width: width
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('foodTrucks', () => foodTrucks);
