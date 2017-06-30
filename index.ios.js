import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
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
        image: require('./images/truck.png'),
        description: 'this is the food you are looking for',
        coordinates: {
          latitude: 39.739236,
          longitude: -104.990251
          },
        },
      {
        title: 'Greetings',
        image: require('./images/truck.png'),
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
        />
        ))}
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
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
