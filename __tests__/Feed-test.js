/** NOT AN ACTUAL TEST. DELETING FILE GIVES ERRORS WITH NODE MODULES. */
import 'react-native';
import React from 'react';
import ProfileAvatar from '@screens/app/Components/ProfileAvatar/ProfileAvatar';
import renderer from 'react-test-renderer';
import firebase from "react-native-firebase";
// firebase.firestore = firestore;
// describe("setDocData", () => {
//   const mockData = { fake: "data" };
//   beforeEach(() => {
//     jest.clearAllMocks();
//     setDocData("fakeDocID", mockData);
//   });

//   it("writes the correct doc", () => {
//     expect(firestore().doc).toHaveBeenCalledWith("docs/fakeDocID");
//   });

//   it("adds a timestamp, and writes it to the doc", () => {
//     expect(firestore().doc().set).toHaveBeenCalledWith({
//       created: "MOCK_TIME",
//       fake: "data"
//     });
//   });
// });

test('profile avarar snapshot test', () => {
  const tree = renderer.create(<ProfileAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});



// const testEnv = functions({
//   databaseURL: 'https://sype-privacy.firebaseio.com',
//   storageBucket: 'sype-privacy.appspot.com',
//   projectId: 'sype-privacy',
// }, 'sype-privacy-firebase-adminsdk-tu1eo-34242756fb.json');
