import React from 'react';
import {FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {IconButton} from 'react-native-paper';
import Post from './../Post/Post';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

export default class ProfileImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_view: 'grid',
    };
  }

  renderGrid = element => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.profileGridCard}
        onPress={() => {
          console.log(element.item.post_id);
        }}>
        <Image
          source={{uri: element.item.img}}
          style={styles.profileGridCardImage}
        />
      </TouchableOpacity>
    );
  };

  render() {
    let postList = this.props.postList;
    return (
      <View style={styles.profileImageViewContainer}>
        <View style={styles.profileViewButtonsContainer}>
          <IconButton
            style={styles.profileViewIcons}
            icon="apps"
            onPress={() => this.setState({profile_view: 'grid'})}
          />
          <IconButton
            style={styles.profileViewIcons}
            icon="view-headline"
            onPress={() => this.setState({profile_view: 'list'})}
          />
        </View>

        {this.state.profile_view == 'grid' ? (
          <FlatList
            key={this.state.profile_view}
            data={postList}
            renderItem={element => this.renderGrid(element)}
            keyExtractor={element => element}
            numColumns={3}
            extraData={this.state.profile_view}
          />
        ) : (
          /** NOTE, we must directly pass in each prop. Otherwise, it will issue an error. */
          <FlatList
            key={this.state.profile_view}
            data={postList}
            renderItem={element => (
              <Post
                img={element.item.img}
                commentsLength={element.item.commentsLength}
                caption={element.item.caption}
                likes={element.item.likes}
                isLiked={element.item.isLiked}
                isBookmarked={element.item.isBookmarked}
                username={element.item.username}
              />
            )}
            keyExtractor={element => element}
            numColumns={1}
            extraData={this.state.profile_view}
          />
        )

        /** Also note, i originaly had conditions on both numColum + renderItem function
         * which would render a different list based on the variable profile_view.
         * But, I'm not sure which one is the 'better' solution + why. */
        /** the flatlist key prop value would force the view to change ie "grid" to "list"
         * source for reference: https://html.developreference.com/article/14124197/Dynamically+changing+number+of+columns+in+React+Native+Flat+List */
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileViewButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileViewIcons: {
    backgroundColor: 'white',
  },
  profileGridCard: {
    width: '32.5%',
    margin: 1,
    overflow: 'hidden',
    borderRadius: 5,
  },
  profileGridCardImage: {
    width: '100%',
    aspectRatio: 1,
  },
});

/** Will probably need to add conditions that check if we have 0 posts, well, then
 * we cannot have required children properities!
 */
// ProfileImageList.propTypes = {
//   postList: AirbnbPropTypes.and(
//     [PropTypes.arrayOf(PropTypes.object).isRequired,
//       AirbnbPropTypes.childrenHavePropXorChildren('username'),
//       AirbnbPropTypes.childrenHavePropXorChildren('commentsLength'),
//       AirbnbPropTypes.childrenHavePropXorChildren('caption'),
//       AirbnbPropTypes.childrenHavePropXorChildren('likes'),
//       AirbnbPropTypes.childrenHavePropXorChildren('isLiked'),
//       AirbnbPropTypes.childrenHavePropXorChildren('isBookmarked'),
//     ]).isRequired,
// };

/** If the input is [], it will NOT throw a warning, and just none of the buttons will work! (Which is what we want!)
 * However, if we pass in [{}] it will throw a warning, becasue we have NOT met
 * the object property requirements! (Also will throw an error when clicking buttons, because
 * prop values are undefined.)
 */
ProfileImageList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      commentsLength: AirbnbPropTypes.nonNegativeIntegerisRequired,
      caption: PropTypes.string.isRequired,
      likes: AirbnbPropTypes.nonNegativeInteger.isRequired,
      isLiked: PropTypes.bool.isRequired,
      isBookmarked: PropTypes.bool.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
