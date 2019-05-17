import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { w, h } from './Response.js';


class LoadScreen extends React.Component {

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require('../img/logo.png')}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        ОБМЕН ВАЛЮТ {"\n"}
                        ОНЛАЙН{"\n"}
                        24/7
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#050500"
    },

    imageView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        width: w < h ? w / 1.4  : h / 1.4 ,
        height: w < h ? w / 1.4 : h / 1.4
    },

    textView: {
    },
    text: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: 'center',
    }
});

export default LoadScreen;
