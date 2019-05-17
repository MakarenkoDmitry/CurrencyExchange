import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

// You can import from local files


class LoadDataScreen extends React.Component {

    render() {

        return (
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={require('../img/fetch.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#acacac",
        alignItems: "center"
    },
    image:{
        width: 300
    },
});

export default LoadDataScreen;
