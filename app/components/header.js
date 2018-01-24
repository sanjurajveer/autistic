import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.header, styles.grid, {opacity: this.props.iconOpacity}]}
                    onPress={this.props.onPress}
                >
                    <Text>B</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,

        backgroundColor: '#00ACDC',
        height: 70,
        top: 0,

        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    },
    title: {
        paddingTop: 10,

        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    },
    grid: {
        justifyContent: 'flex-start',
        paddingTop: 19
    }
});
