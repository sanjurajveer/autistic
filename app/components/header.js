import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity
                    style={[styles.header, styles.grid, {opacity: this.props.iconOpacity}]}
                    onPress={this.props.onPress}
                >
                    <Image
                        source={require('../assets/img/pencil-icon.png')}
                        style={[styles.grid, {tintColor: "#ffffff"}]}
                    />
                </TouchableOpacity>
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
        right: 10
    },
    grid: {
        marginTop: 18,
        width: 26,
        height: 26
    },
    title: {
        paddingTop: 10,

        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    }
});
