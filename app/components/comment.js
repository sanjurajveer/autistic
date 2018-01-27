import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';

const window = Dimensions.get('window');

export default class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.user}>Joseph Babbitt</Text>
                <Text>Wow cool app! Great that you are helping out those in need.</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    user: {
        fontWeight: '600',
        marginBottom: 5
    }
});
