import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import FeedScreen from '@screens/Feed';

var assert = require('assert');

const containsPost = async (posts, searchingPostID) => {
  posts.forEach(post => {
    if (searchingPostID === post.key) {
      return true;
    }
  });
  return false;
};

describe('tessting post rendering', () => {
  it('adding post to database and checking onSnapshot listener', async () => {
    const wrapper = shallow(<FeedScreen />);
    const instance = wrapper.instance();

    const postID = await FeedScreen.addDefaultPostToDatabase();

    const posts = instance.state.posts;
    const arrayContainsPost = containsPost(posts, postID);
    await expect(arrayContainsPost).toBe(true);
  });
});
