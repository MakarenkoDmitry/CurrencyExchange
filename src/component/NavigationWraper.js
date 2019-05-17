import React from 'react';
import {Image, Linking} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CurrencyScreen from './CurrencyScreen';
import ConvertScreen from './ConvertScreen';
import Map from './Map';
import {Row, Rows, Table} from "react-native-table-component";

let contact = {
    phone: '+380671573882',
    telegram: 'https://t.me/valuta_24'
};

let callNumber = (url) =>  {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));
};

const TabNavigator = createBottomTabNavigator({
    Currency: {
        screen: CurrencyScreen,
        navigationOptions: {
            title: 'Курс',
        },
    },
        Convert: {
            screen: ConvertScreen,
            navigationOptions: {
                title: 'Конвектор',
            },
        },
        Map: {
            screen: Map,
            navigationOptions: {
                title: 'Карта',
            },
        },
        Telegram: {
            screen: CurrencyScreen,
            navigationOptions: {
                title: 'Telegram',
                tabBarOnPress: ({navigation}) => {
                    callNumber(`${contact.telegram}`);
                }
            },
        },
        Call: {
            screen: CurrencyScreen,
            navigationOptions: {
                title: 'Call',
                tabBarOnPress: ({navigation}) => {
                    callNumber(`tel:${contact.phone}`);
                }
            },
        }

},
    {

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let component;
                switch (routeName) {
                    case "Currency":
                        component = <Image
                            style={{width:20, height: 20}}
                            source={require('../img/ico_home.png')}
                        />;
                        break;
                    case "Convert":
                        component = <Image
                            style={{width:20, height: 22}}
                            source={require('../img/ico_convert.png')}
                        />;
                        break;
                    case "Map":
                        component = <Image
                            style={{width:25, height: 25}}
                            source={require('../img/ico_map.png')}
                        />;
                        break;
                    case "Telegram":
                        component = <Image
                            style={{width:25, height: 25}}
                            source={require('../img/ico_telegram.png')}
                        />;
                        break;
                    case "Call":
                        component = <Image
                            style={{width:25, height: 25}}
                            source={require('../img/ico_contact.png')}
                        />;
                        break;
                    default:
                        component = <Image
                            style={{width:20, height: 20}}
                            source={require('../img/ico_home.png')}
                        />;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return component;
            }
        }),tabBarOptions: {
            activeTintColor: '#385158',
            labelStyle: {
                fontSize: 15,
            },
            style: {
                backgroundColor: '#000',
            }
        }

    });





export default createAppContainer(TabNavigator);