import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, FlatList, Text, Image, AsyncStorage } from 'react-native';

import Header from "./components/header.js";
import Post from "./components/post.js";

const window = Dimensions.get('window');

export default class Discover extends Component {

    static navigationOptions = {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./assets/img/compass-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        };

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
    }

     loadUserInfo = async () => {
         try {
             const user = await AsyncStorage.getItem('@LocalStorage:user');
             const password = await AsyncStorage.getItem('@LocalStorage:password');
             if ((user !== null) && (password !== null)) {
                 console.warn("User: " + user + " Password: " + password);
             } else {
                 console.warn("Nothing found");
             }
         } catch (error) {
           // Error retrieving data
         }
    };


    // componentDidMount() {
        // var ws = new WebSocket('wss://4797227c.ngrok.io');
        //
        // ws.onopen = () => {
        //     ws.send(JSON.stringify({
        //         "messageType": "GetFeed",
        //         "data": {
        //             "interest": "Programming"
        //         },
        //         "authKey": "samuelpiltch"})
        //     );
        // };
        //
        // ws.onmessage = (e) => {
        //     // if (e.data != "")
        //     console.warn("ONMESSAGE: " + e.data);
        //     this.setState({ posts: e.data });
        //     console.warn()
        // }
    // }

    render() {
        this.loadUserInfo().done();

        return (
            <View style={styles.container}>
                <Header
                    title="Discover"
                    iconOpacity={0}
                />
                <FlatList
                    style={{height: window.height-118}}
                    data={[{key: 'a'}, {key: 'b'}]}
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
    interest_title: {
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 16,
        fontWeight: '700',
    }
});
