import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Caption} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  // renders each post function
  renderPosts = element => {
    const {img} = element.item;
    return (
      <Card>
        <Card.Cover source={{uri: img}} style={styles.card} />
        <Card.Content>
          <Caption>caption</Caption>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const posts = [
      {
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        comments: [
          'youre fucking bot',
          'dumb fucking infected bitch',
          'bobs and vagen pls',
        ],
        username: 'gabriela',
      },
      {
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        comments: [
          'youre fucking bot',
          'dumb fucking infected bitch',
          'bobs and vagen pls',
        ],
        username: 'gabriela',
      },
      {
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        comments: [
          'youre fucking bot',
          'dumb fucking infected bitch',
          'bobs and vagen pls',
        ],
        username: 'gabriela',
      },
    ];
    return (
      <View style={styles.container}>
        <Carousel
          layout={'tinder'}
          data={posts}
          renderItem={this.renderPosts}
          sliderWidth={500}
          itemWidth={400}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '90%',
  },
});
