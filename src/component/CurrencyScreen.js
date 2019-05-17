import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// You can import from local files


class CurrencyScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        let dataTable = {
            tableHead: ['', 'покупка', <Text style={styles.headSel}>продажа</Text>],
            tableData: []
        };
        dataTable.tableData = this.props.screenProps.currency.map( row =>
            [<Text style={styles.rowName}>{row.name}</Text>, row.b, <Text style={styles.textSel}>{row.s}</Text>]
        );
        return (
            <View style={styles.container} >
                    <View style={styles.topLine}>
                        <Image
                            style={{width: 150, height: 40}}
                            source={require('../img/topLineLogo.png')}
                        />
                    </View>
                <ScrollView>
                    <Table style={styles.table} borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
                        <Row data={dataTable.tableHead} textStyle={styles.head}/>
                        <Rows data={dataTable.tableData} textStyle={styles.text}/>
                    </Table>
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
    table: {
    },
    rowName: {
        color: "#fef60d",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    head: {
        color: "#fef60d",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    headSel: {
        color: "#fef60d",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    text: {
        color: "#fef60d",
        textAlign: "center",
        fontSize: 30,
        padding: 10,
        fontWeight: "bold"
    },
    textSel: {
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default CurrencyScreen;
