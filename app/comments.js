import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Header from "./components/header.js";
import Comment from "./components/comment.js";

const window = Dimensions.get('window');

export default class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: undefined,
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

    onChangeText(text) {
        this.setState({ text: text });
    }

    onSubmitEditing = ({ nativeEvent: { text } }) => this.setState({ text }, this.submit);

    submit() {
        const { text } = this.state.text;
        if (text !== undefined) {
            this.setState({ text: undefined }, () => this.props.onSubmit(text));
        } else {
            alert('Please enter your comment first');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Comments"
                    iconOpacity={0}
                />
                <ScrollView
                    style={{height: window.height-118}}
                >
                    <Comment
                        user="You:"
                        comment="I love Billie Eilish! She's so good! I can't believe she's so young. Do you have any other artist recommendations?"
                    />
                    <Comment
                        user="Sarah Bridget:"
                        comment="Have you heard of Brockhampton? I think you'll like them!"
                    />
                </ScrollView>

                <KeyboardAvoidingView
                    behavior='position'
                >
                    <View style={styles.input_container}>
                        <TextInput
                            placeholder="Add a comment..."
                            keyboardType="twitter" // keyboard with no return button
                            autoFocus={true} // focus and show the keyboard
                            style={styles.input}
                            value={this.state.text}
                            onChangeText={this.onChangeText} // handle input changes
                            onSubmitEditing={this.onSubmitEditing} // handle submit event
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.submit}
                        >
                        <Text style={[styles.text, !this.state.text ? styles.inactive : []]}>Post</Text>
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
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#eee',
        alignItems: 'center',
        paddingLeft: 15,
        position: 'absolute',
        bottom: 0
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 15,
    },
    button: {
        height: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactive: {
        color: '#ccc',
    },
    text: {
        color: '#00ACDC',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 15,
    }
});
