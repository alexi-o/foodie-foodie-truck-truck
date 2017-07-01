import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';

class Home extends Component {
    render(){
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

export default Home;