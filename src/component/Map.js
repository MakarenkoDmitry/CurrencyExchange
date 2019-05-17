import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#385158"


    },
    wrapMap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    topLine: {
        backgroundColor: "#000",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15
    }
});

 class Map extends React.Component {
 render() {
   const { region } = this.props;
   console.log(region);

   return (
       <View style={styles.container} >
           <View style={styles.topLine}>
               <Image
                   style={{width: 150, height: 40}}
                   source={require('../img/topLineLogo.png')}
               />
           </View>
             <View style={styles.wrapMap}>
               <MapView
                 style={styles.map}
                 region={{
                   latitude: 50.0129102,
                   longitude: 36.2269029,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
                 }}
               >
                   <MapView.Marker.Animated
                       coordinate={{
                           latitude: 50.0129102,
                           longitude: 36.2269029,
                       }}
                   />
                   <MapView.Marker.Animated
                       coordinate={{
                           latitude: 50.0121102,
                           longitude: 36.2219029,
                       }}
                   />
               </MapView>
             </View>
       </View>
   );
 }
}

export default Map;