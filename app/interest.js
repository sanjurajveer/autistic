import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Header from "./components/header.js";

const window = Dimensions.get('window');

export default class Interest extends Component {

    static navigationOptions = {
        tabBarLabel: 'Interest',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./assets/img/compass-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Interest"
                    iconOpacity={0}
                />
                <FlatList
                    style={{height: window.height-118}}
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                    renderItem={({item}) => <Post navigation={this.props.navigation}/>}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
    },
    icon: {
        width: 26,
        height: 26
    },
});
