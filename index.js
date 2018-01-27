import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from './app/login.js';
import SignUp from './app/signup.js';
import Home from './app/index.js';
import Comments from './app/comments.js';
import NewPost from './app/new_post.js';
import Discover from './app/discover.js';
import Interest from './app/interest.js';
import Notifications from './app/notifications.js';
import Profile from './app/profile.js';

export const FriendConnect = StackNavigator({
    House: {
        screen: Home,
    },
    NewPost: {
        screen: NewPost,
    },
    Comments: {
        screen: Comments,
    }},
    {
        headerMode: 'none'
    }
);

export const Interests = StackNavigator({
    Discover: {
        screen: Discover,
    },
    Interest: {
        screen: Interest,
    }},
    {
        headerMode: 'none'
    }
);

const FriendConnectTab = TabNavigator({
        Home: {
            screen: FriendConnect,
        },
        Discover: {
            screen: Interests
        },
        Notifications: {
            screen: Notifications,
        },
        Profile: {
            screen: Profile,
        }
    }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#00ACDC',
        }
    }
);

export const Stack = StackNavigator({
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
    Home: {
        screen: FriendConnectTab,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: false,
        })
    }},
    {
        headerMode: 'none',
        initialRouteName: "Home"
    }
);

AppRegistry.registerComponent('friendconnect', () => Stack);
