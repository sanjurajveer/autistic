import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, FlatList, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import { NavigationActions } from 'react-navigation'

import Header from "./components/header.js";

const window = Dimensions.get('window');

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            password: undefined
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.submit = this.submit.bind(this);
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/img/home-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    setUserInfo = async () => {
        try {
            await AsyncStorage.multiSet([['@LocalStorage:user', this.state.user], ['@LocalStorage:password', this.state.password]]);
            this.props.navigation.navigate("Home");
        } catch (error) {
            alert("Couldn't sign you up")
        }
   };

    onChangeText(type, text) {
        if (type == "user") {
            this.setState({ user: text });
        } else if (type == "password") {
            this.setState({ password: text });
        }
    }

    submit() {
        if ((this.state.user != "" && this.state.user != undefined) && (this.state.password != "" && this.state.password != undefined)) {
            var ws = new WebSocket('ws://localhost:8000');

            ws.onopen = () => {
                ws.send(JSON.stringify({
                    "messageType": "createUser",
                    "data": {
                        "name": this.state.user,
                        "password": this.state.password,
                    },
                    "authKey": this.state.user})
                );

                this.setUserInfo().done();

                this.setState({ user: undefined });
                this.setState({ password: undefined });

            };

        } else {
            alert('Please make you sure you have filled out all fields.');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Sign Up"
                    iconOpacity={0}
                />
                <KeyboardAvoidingView
                    behavior='height'
                >
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder="Username"
                            keyboardType="twitter"
                            style={styles.input}
                            value={this.state.user}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.onChangeText("user", text)}
                            onSubmitEditing={this.onSubmitEditing}
                        />
                        <TextInput
                            placeholder="Password"
                            keyboardType="twitter"
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={(text) => this.onChangeText("password", text)}
                            onSubmitEditing={this.onSubmitEditing}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.submit}
                        >
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                    >
                        <Text style={styles.create}>I already have an account</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
    },
    icon: {
        width: 26,
        height: 26
    },

    input_container: {
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    input: {
        width: window.height,
        height: 50,
        backgroundColor: '#fff',
        fontSize: 15,
        paddingLeft: 15,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#eee',
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#00ACDC',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 15,
    },
    create: {
        paddingTop: 15,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
});
