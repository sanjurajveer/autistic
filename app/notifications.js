import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Header from "./components/header.js";

const window = Dimensions.get('window');

export default class Notifications extends Component {

    static navigationOptions = {
        tabBarLabel: 'Notifications',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./assets/img/bell-icon.png')}
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
                    title="Notifications"
                    iconOpacity={0}
                />
                <ScrollView style={{height: window.height-75}}>
                </ScrollView>
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
