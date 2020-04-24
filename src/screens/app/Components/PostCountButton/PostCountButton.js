import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';

export default class PostCountButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /** The user profile's followers */
    //const user_id = this.props.user_id;

    /** Here, we just need the count of posts,
     * which is created when we query the users.
     */
    const posts_count = this.props.posts_count;

    return <Chip style={styles.chip}>Posts {numberFormat(posts_count)}</Chip>;
  }
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
