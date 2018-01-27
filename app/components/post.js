import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import ViewMoreText from 'react-native-view-more-text';

const window = Dimensions.get('window');

export default class Post extends Component {

    constructor(props) {
        super(props);
    }

    renderViewMore(onPress) {
        return (
            <Text style={styles.expand} onPress={onPress}>View more</Text>
        )
    }

    renderViewLess(onPress) {
        return (
            <Text style={styles.expand} onPress={onPress}>View less</Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.interest}>Engineering • Samuel Piltch</Text>
                    <Text style={styles.title}>I recently built a new app in React Native that helps kids with autism connect with others and spark new interests</Text>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={this.renderViewMore}
                        renderViewLess={this.renderViewLess}
                        textStyle={styles.content}
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        </Text>
                    </ViewMoreText>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Comments')}
                    >
                        <Image
                            source={require('../assets/img/message-icon.png')}
                            style={styles.button}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginVertical: 10
    },
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    interest: {
        fontWeight: '300',
        color: '#4a4a4a',
        paddingBottom: 5
    },
    title: {
        fontWeight: '700'
    },
    content: {
        marginTop: 10
    },
    button: {
        position: 'absolute',
        bottom: 7,
        right: 10,
        height: 20,
        width: 20,
        borderColor: '#2a2a2a',
        borderRadius: 5
    },
    expand: {
        paddingTop: 15,
        color: "#1290cc",
        fontWeight: '600',
        textAlign: 'center'
    }
});
