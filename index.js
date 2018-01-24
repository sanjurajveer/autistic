import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';

import { StackNavigator } from 'react-navigation';

import FriendConnect from './app/index.js';

export default class App extends Component {

    render() {
        return (
            <View>
                <StatusBar
                    barStyle='light-content'
                />
                <FriendConnect
                    navigation={this.props.navigation}
                />
            </View>
        )
    }

}

const FriendConnectNav = StackNavigator(
    // Navigation Scenes
    {
        Home: { screen: App },
        Listings: { screen: App }
    },
    // Navigator Options
    {
        headerMode: 'none'
    }
)

AppRegistry.registerComponent('friendconnect', () => App);
