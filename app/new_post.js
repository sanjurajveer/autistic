import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, FlatList, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import { NavigationActions } from 'react-navigation'

import Header from "./components/header.js";

const window = Dimensions.get('window');

export default class NewPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: undefined,
            interest: undefined,
            content: undefined,
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

    onChangeText(type, text) {
        if (type == "title") {
            this.setState({ title: text });
        } else if (type == "interest") {
            this.setState({ interest: text });
        } else {
            this.setState({ content: text });
        }
    }

    onSubmitEditing = ({ nativeEvent: { text } }) => this.setState({ text }, this.submit);

    submit() {
        if ((this.state.title != "" && this.state.title != undefined) && (this.state.interest != "" && this.state.interest != undefined) && (this.state.content != "" && this.state.content != undefined)) {
            var ws = new WebSocket('wss://4797227c.ngrok.io');

            ws.onopen = () => {
                ws.send(JSON.stringify({
                    "messageType": "AddPost",
                    "data": {
                        "interest": this.state.interest,
                        "title": this.state.title,
                        "content": this.state.content
                    },
                    "authKey": "fuckyou"})
                );

                this.setState({ title: undefined });
                this.setState({ interest: undefined });
                this.setState({ content: undefined });

                // console.warn(this.props.navigation);
                this.props.navigation.dispatch(NavigationActions.back());

            };

        } else {
            alert('Please make you sure you have filled out all fields.');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="New Post"
                    iconOpacity={0}
                />
                <KeyboardAvoidingView
                    behavior='height'
                >
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder="Title"
                            keyboardType="twitter"
                            style={styles.input}
                            value={this.state.title}
                            onChangeText={(text) => this.onChangeText("title", text)}
                            onSubmitEditing={this.onSubmitEditing}
                        />
                        <TextInput
                            placeholder="Interest"
                            keyboardType="twitter"
                            style={styles.input}
                            value={this.state.interest}
                            onChangeText={(text) => this.onChangeText("interest", text)}
                            onSubmitEditing={this.onSubmitEditing}
                        />
                        <TextInput
                            placeholder="Content"
                            keyboardType="twitter"
                            style={[styles.input, {height: 250, paddingTop: 15}]}
                            value={this.state.content}
                            onChangeText={(text) => this.onChangeText("content", text)}
                            onSubmitEditing={this.onSubmitEditing}
                            multiline={true}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.submit}
                        >
                            <Text style={styles.text}>Post</Text>
                        </TouchableOpacity>
                    </View>
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
    }
});
