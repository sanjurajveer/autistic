import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Header from "./components/header.js";
import Post from "./components/post.js";

const window = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Friend Connect"
                    iconOpacity={1}
                    onPress={() => this.props.navigation.navigate('NewPost')}
                />
                <ScrollView
                    style={{height: window.height-118}}
                >
                    <Post
                        navigation={this.props.navigation}
                        interest="Hockey"
                        author="George O'Brien"
                        title="Yesterday's Rangers win!"
                        content="McDonagh's 2 goals lifted the Rangers past the Sharks last night. The Rangers played great and I can't wait to see what else happens this season. Stanley Cup here we come!"
                    />
                    <Post
                        interest="Music"
                        author="George Polar"
                        title="Pop to Hip Hop"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Art"
                        author="Janat"
                        title="Louvre Visit"
                        content="After going to Paris, I finally got to discover the Louvre and the beautiful art there."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Basketball"
                        author="Simon Zeller"
                        title="My night at the Nets game!"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Music"
                        author="Sarah Bridget"
                        title="This week's hot new artist: Billie Eilish"
                        content="At the age of 16 Eilish’s organic popularity is nearly unheard of, particularly at a time when artists rarely break through without the help of a powerful record label or heaps of cash. One can only imagine what she’ll accomplish now that she’s found a new platform and developed an eager audience. In her first interview to date, Eilish answers what every music lover is thinking: Where did she come from, and what can we expect next?"
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Interest"
                        author="Author"
                        title="Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Interest"
                        author="Author"
                        title="Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Interest"
                        author="Author"
                        title="Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Interest"
                        author="Author"
                        title="Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                    <Post
                        interest="Interest"
                        author="Author"
                        title="Title"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nibh vitae ultricies pharetra, arcu felis aliquam nibh, sed semper ante dui non nibh. Sed placerat ligula eu tortor mollis auctor. Phasellus risus neque, sodales sit amet quam sed, scelerisque fringilla lorem. Praesent a purus eget leo varius luctus vel euismod eros. Phasellus non tristique diam, at porttitor arcu. Duis fermentum diam vestibulum velit auctor blandit. Pellentesque eros neque, aliquam non magna eu, dictum eleifend felis. Integer vitae imperdiet leo. Morbi consequat lorem tellus, ut molestie turpis viverra in."
                        navigation={this.props.navigation}
                    />
                </ScrollView>
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
    }
});
