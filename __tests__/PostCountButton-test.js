import 'react-native';
import React from 'react';
import PostCountButton from '@screens/app/Components/PostCountButton/PostCountButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../src/common/numberFormatter';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');

/** ================ HELPER FUNCTIONS =============== */

/** Notice, always forcing the other props to be correct, to not produce warnings and test each prop individually. */
function testAllProperPropsPassed(username, posts_count) {
  it('Username value is the PostCount Button prop value', () => {
    const wrapper = shallow(
      <PostCountButton username={username} posts_count={0} />,
    );
    const instance = wrapper.instance();
    const usernameProp = instance.props.username;
    expect(username).toEqual(usernameProp);
  });

  it('Posts Count value is the PostCount Button prop value', () => {
    const wrapper = shallow(
      <PostCountButton username={''} posts_count={posts_count} />,
    );
    const instance = wrapper.instance();
    const postsCountProp = instance.props.posts_count;
    expect(posts_count).toEqual(postsCountProp);
  });
}

/** Pass in all props for when we require them */
function testChipInnerText(username, posts_count) {
  it('Posts Chip should Display Posts ' + posts_count, () => {
    const wrapper = shallow(
      <PostCountButton username={username} posts_count={posts_count} />,
    );
    const chipWrapper = wrapper.find(Chip);
    const chipText = chipWrapper.text();
    /**Check if posts_count is undefined -> expect 0 */
    const expectedPostsCount = posts_count === undefined ? 0 : posts_count;

    /**Formatting seems to work with ''  */
    expect(chipText).toEqual('Posts ' + numberFormat(expectedPostsCount));
  });
}

/** ================ SNAPSHOT TEST ================ */

/** NOTE, snapshot tests will give warnings with no required props passed. */
test('Post Count Button Snapshot Test', () => {
  const tree = renderer
    .create(<PostCountButton username={''} posts_count={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/** ================ UNIT TESTS ================ */
describe('PostCountButton Unit Testing', () => {
  const integerPostCountTest = 1;
  const stringUsernameTest = 'bsefa';
  testAllProperPropsPassed(stringUsernameTest, integerPostCountTest);
  testChipInnerText(stringUsernameTest, integerPostCountTest);

  it('Throws failed propType erorr for not providing any props', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {},
      'prop',
      PostCountButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws failed propType erorr for not providing username', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {posts_count: 1},
      'prop',
      PostCountButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws failed propType erorr for not providing posts_count', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: 'bujar'},
      'prop',
      PostCountButton,
    );
    /** console.log(result);
     * This actually prints: Failed prop type: posts_count in function PostCountButton {
     *   (0, _classCallCheck2.default)(this, PostCountButton);
     *   return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PostCountButton).call(this, props));
     * } must be an integer
     * But incase (becasue I don't necessarily know how it all works) the inner function changes, we don't want to expect what happens inside. Just that its the right class and right type.
     */
    /** NOTICE, that this does not check for posts_count to be require or non-negative! Which is the actual restriction to the prop type */
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing username value of undefined and not required value', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: undefined},
      'prop',
      PostCountButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required in `function PostCountButton',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: true},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: false},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of integer number and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: 12},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of double number and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: 12.1},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of array and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: []},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `array` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of object and not string', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: {}},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `object` supplied to `function PostCountButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of undefined and not required value', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: undefined},
      'prop',
      PostCountButton,
    );
    /** This doesn't compare the type. Just realizes that it is not an integer.
     * Different from PropTypes logs...
     * Will this ultimately matter?
     */
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of true and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: true},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of false and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: false},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of number and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: 12.1},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of array and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: []},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of object and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: {}},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of negative number and must be an non-negative integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: -1},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be a non-negative number'),
    );
  });

  it('Throws Failed propType Error for providing posts_count value of negative double number and must be an integer', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: -1.1},
      'prop',
      PostCountButton,
    );
    //console.log(result);

    /** In airbnb documentaion, a non-negative integer is just defined as an integer and non negative number
     * Because integer case fails, it returns must be an integer!
     */
    assert(
      result.includes(
        'Failed prop type: posts_count in function PostCountButton',
      ) && result.includes('must be an integer'),
    );
  });

  it('Undefined returned for username and profile_image string type', () => {
    let result = checkPropTypes(
      PostCountButton.propTypes,
      {username: '', posts_count: 0},
      'prop',
      PostCountButton,
    );
    //console.log(result);
    //result returns undefined when the values are true, as they should be.
    assert(result === undefined);
  });
});
