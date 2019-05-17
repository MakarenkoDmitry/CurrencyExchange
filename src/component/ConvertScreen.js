import * as React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// You can import from local files


class ConvertScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            convertFrom: '',
            convertTo: '',
            currency: {},
            button: [
                {
                    id: 0,
                    title: 'покупка'
                },
                {
                    id: 1,
                    title: 'продажа'
                }
            ]
        };
        this.items =[];
    }

    handleCalc(value){
        let curencyCount = this.state.currency;
        let key = this.state.active ? 's' : 'b';
        this.setState({convertTo: (value * curencyCount[key]).toFixed(2), convertFrom: value}, ()=>{});
    }

    handleCalcDel(value){
        let curencyCount = this.state.currency;
        let key = this.state.active ? 's' : 'b';
        this.setState({convertFrom: (value / curencyCount[key]).toFixed(2), convertTo: value}, ()=>{});
    }

    handleChangeButton(id) {
        this.setState({active: id, convertFrom: '', convertTo: ''} , ()=>{})
    }

    componentWillMount() {
        this.items = this.props.screenProps.currency.filter(el => el.is_calc).map(el => (
            {
                label: el.name,
                value: el
            }
        ));

        this.setState({currency: this.items[0].value},()=>{})
    }

    render() {
        let { button, active } = this.state;
        let key = active ? 's' : 'b';

        console.log(this.state.currency);
        return (
            <View style={styles.container} >
                    <View style={styles.topLine}>
                        <Image
                            style={{width: 150, height: 40}}
                            source={require('../img/topLineLogo.png')}
                        />
                    </View>
                <ScrollView>
                <View style={styles.convertView}>
                    <View style={styles.buttonWrap}>
                        {
                            button.map(button => (
                                <Text
                                    key={button.id}
                                    style={active === button.id ? styles.buttonSwichActive : styles.buttonSwich }
                                    onPress={()=> {this.handleChangeButton(button.id)}}
                                >
                                    {button.title}
                                </Text>
                            ))
                        }
                    </View>
                    <View style={styles.selectWrap}>
                        <RNPickerSelect
                            placeholder={{
                                label: "USD/UAH",
                                value: this.items[0].value,
                                color: '#425a60',
                            }}
                            items={this.items}
                            onValueChange={(value) => {
                                this.setState({
                                    currency: value,
                                    convertFrom: '',
                                    convertTo: ''
                                });
                            }}
                            style={{ ...pickerSelectStyles }}
                            value={this.state.currency}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            style={{
                                padding: 10,
                                width: 310,
                                fontSize: 25,
                                backgroundColor: "#c4c4c4",
                                borderWidth: 4,
                                borderRadius: 20,
                                borderColor: "#f5ec00",
                                textAlign: 'center',
                                shadowColor: '#000',
                                marginBottom: 15,
                                shadowOffset: {
                                    width: 0,
                                    height: 3
                                },
                                elevation: 2,
                                shadowOpacity: .2,
                                position: 'relative'
                            }}
                            placeholder='0'
                            onChangeText={value => this.handleCalc(value)}
                            onFocus={()=>this.setState({convertTo: '', convertFrom: ''})}
                            value={this.state.convertFrom+''}
                        />
                        <Image
                            style={{width: 290, marginBottom: 20, marginTop:5}}
                            source={require('../img/arrows.png')}
                        />
                        <TextInput
                            style={{
                                padding: 10,
                                width: 310,
                                fontSize: 25,
                                backgroundColor: "#c4c4c4",
                                borderWidth: 4,
                                borderRadius: 20,
                                borderColor: "#f5ec00",
                                textAlign: 'center',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 3
                                },
                                elevation: 2,
                                shadowOpacity: .2,
                                position: 'relative'
                            }}
                            placeholder='0'
                            onChangeText={value => this.handleCalcDel(value)}
                            onFocus={()=>this.setState({convertTo: '', convertFrom: ''})}
                            value={this.state.convertTo+''}
                        />
                    </View>

                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: "#385158"
    },
    topLine: {
      backgroundColor: "#000",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15
    },
    convertView: {
        alignItems: "center"
    },
    buttonWrap: {
        marginTop: 15,
        marginBottom: 15
    },
    selectWrap: {
        marginTop: 15,
        marginBottom: 15,
    },
    inputWrap: {
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonSwich:{
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
    buttonSwichActive:{
        color: '#f5ec00',
        fontSize: 35,
        fontWeight: 'bold',
        borderBottomColor: '#f5ec00',
        borderBottomWidth: 2,
        textAlign: 'center'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#2c2c2a',
        color: '#fff',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#2c2c2a',
        color: '#fff',
    },
});

export default ConvertScreen;
