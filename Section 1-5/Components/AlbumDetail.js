import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, titleTextStyle,
        artistTextStyle, imageStyle
      } = styles;
    return (
    <Card> 
        <CardSection>
             <View style={thumbnailContainerStyle}>
                 <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
             </View>
             <View style={headerContentStyle}>
                 <Text style={titleTextStyle}>{ title }</Text>
                 <Text style={artistTextStyle}>{ artist }</Text>
             </View>
        </CardSection>
        <CardSection>
            <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                Buy Nowwww!!
            </Button>
        </CardSection>
    </Card>);
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5360'
    },
    artistTextStyle: {
        fontSize: 15,
        color: '#FF5360'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        resizeMode: 'cover',
        width: null
    }
};  

export default AlbumDetail;
