import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text } from 'react-native';

import Header from "./components/header.js";

const window = Dimensions.get('window');

export default class FriendConnect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Friend Connect"
                    iconOpacity={0}
                />
                <ScrollView style={{height: window.height-75}}>
                    <View style={styles.genres}>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE',
    },
    genres: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'center',

        marginTop: 15,
        marginBottom: 15
    }
});
