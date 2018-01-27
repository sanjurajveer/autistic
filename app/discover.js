import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image, AsyncStorage } from 'react-native';

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
            posts: [],
            authKey: "",
            interest: "Programming"
        }
    }

    componentDidMount() {
    }

     loadUserInfo = async () => {
         try {
             const user = await AsyncStorage.getItem('@LocalStorage:user');
             const password = await AsyncStorage.getItem('@LocalStorage:password');
             if ((user !== null) && (password !== null)) {
                 this.setState({ authKey: user });
             } else {
                 console.warn("Nothing found");
             }
         } catch (error) {
           // Error retrieving data
         }
    };

    componentDidMount() {
        this.loadUserInfo().done();

        if (this.state.authKey !== null) {
            var ws = new WebSocket('ws://localhost:8000');

            ws.onopen = () => {
                ws.send(JSON.stringify({
                    "messageType": "GetFeed",
                    "data": {
                        "interest": this.state.interest
                    },
                    "authKey": this.state.authKey
                    })
                );
            };

            ws.onmessage = (e) => {
                if (e.data !== "Connected to Server") {
                    this.setState({ posts: e.data });
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Discover"
                    iconOpacity={0}
                />
                <ScrollView
                    style={{height: window.height-118}}
                >
                    <Text style={styles.interest_title}>Programming</Text>
                    <Post
                        navigation={this.props.navigation}
                        interest="Programming"
                        author="Samuel Piltch"
                        title="Creating your first React Native app!"
                        content="React Native allows for cross compatible apps to be created over multiple mobile systems. Create React Native App is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see Caveats)."
                    />
                    <Post
                        navigation={this.props.navigation}
                        interest="Programming"
                        author="Chris Shallue"
                        title="Earth to exoplanet: Hunting for planets with machine learning"
                        content="For thousands of years, people have looked up at the stars, recorded observations, and noticed patterns. Some of the first objects early astronomers identified were planets, which the Greeks called “planētai,” or “wanderers,” for their seemingly irregular movement through the night sky. Centuries of study helped people understand that the Earth and other planets in our solar system orbit the sun—a star like many others."
                    />
                    <Post
                        navigation={this.props.navigation}
                        interest="Programming"
                        author="Saad Ansari"
                        title="Using TensorFlow to keep farmers happy and cows healthy"
                        content="Connecterra means “connected earth.” We formed the company based on a simple thesis: if we could use technology to make sense of data from the natural world, then we could make a real impact in solving the pressing problems of our time."
                    />

                    <Text style={styles.interest_title}>Movies</Text>
                    <Post
                        navigation={this.props.navigation}
                        interest="Movies"
                        author="Siddharth Martis"
                        title="My thoughts on Maze Runner: The Death Cure"
                        content="Upon its original release, 2014’s Maze Runner was the closest filmmakers had ever got to hitting the mark. It wasn’t great, overlong, and had glaring plot holes, but it was an enjoyable enough diversion. It didn't amaze me and neither did it's bland sequel, making for a middling but by no means horrible series. The Death Cure follows its predecessor and is easily the most middling and tedious film in the Maze Runner cannon."
                    />
                    <Post
                        navigation={this.props.navigation}
                        interest="Movies"
                        author="Siddharth Martis"
                        title="The Marmalade Enthusiast returns in his most enjoyable adventure yet"
                        content="As charming, heartwarming, and innocent as its titular protagonist, Paddington 2 builds upon its predecessors groundwork. It expands on Paddington’s backstory, offering depth to a CGI, marmalade-eating bear, and creates well-rounded arches for character who deserve their rightful spin-offs; the prime example being Hugh Grants enigmatic, Phoenix Buchanan."
                    />
                    <Post
                        navigation={this.props.navigation}
                        interest="Movies"
                        author="Elliot Hopper"
                        title="Will the Russo brothers remain with Marvel studios?"
                        content="This pair has been nothing less than a godsend to the studios, helming two of their most well-received films in history in the form of Captain America: Civil War and Captain America: The Winter Soldier, and they have now been tasked with finishing off Phase Three, and ten years of MCU movies, in Avengers: Infinity War and Avengers 4. So the brothers are clearly the go-team for the studios event films. But will they stick around after Avengers 4, or simply ride off into the sunset, enjoying the fact that they managed to complete two of the biggest movies in history, proud of their work and rightfully so?"
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
    },
    interest_title: {
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 16,
        fontWeight: '700',
    }
});
