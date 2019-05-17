import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import LoadScreen from './component/LoadScreen';
import LoadDartaScreen from './component/LoadDartaScreen';
import NavigationWraper from './component/NavigationWraper';

// You can import from local files

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startScreen: true,
            load: false,
            currency: [
            ]
        };

        this.getCurrency = this.getCurrency.bind(this);
    }

    timerStartScreen() {
        this.timer = setTimeout(() => {
            this.setState({ startScreen: false });
        }, 1000);
    }

    componentDidMount() {
        this.timerStartScreen();
        this.getCurrency()
    }

    getCurrency(){
        this.setState( {load:true});

        return axios.get('http://app.valuta.kh.ua/?method=getCurrencyData')
            .then((response) => response)
            .then((responseJson) => {

                this.setState({currency: responseJson.data.data, load:false},
                    function () {

                    })
            });
    }

    render() {
        let { startScreen, load, currency } = this.state;
        console.log(currency);
        return (
            <View style={styles.container}>
                {startScreen ?
                    <LoadScreen/> :
                    load ?
                        <LoadDartaScreen/>
                        :
                        <NavigationWraper screenProps={{currency}}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;