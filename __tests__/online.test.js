

// [START all]
// [START import]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

const admin = require('firebase-admin');

const projectConfig = {
    projectId: 'sype-privacy',
    databaseURL: 'https://sype-privacy.firebaseio.com'
}

//require('../src/sype-privacy-firebase-adminsdk-tu1eo-a50da24055.json')
const test = require('firebase-functions-test')(projectConfig, '../src/sype-privacy-firebase-adminsdk-tu1eo-a50da24055.json');

var assert = require('assert');
// const fetchPosts = () => {
//     const subscriber = firestore()
//       .collection('posts')
//       .onSnapshot(querySnapshot => {
//         const posts = [];

//         querySnapshot.forEach(documentSnapshot => {
//           posts.push({
//             ...documentSnapshot.data(),
//             key: documentSnapshot.id,
//           });
//         });

//         this.setState({
//           posts,
//           loading: false,
//         });
//       });

admin.initializeApp();




// [END import]

// // [START addMessage]
// // Take the text parameter passed to this HTTP endpoint and insert it into the
// // Realtime Database under the path /messages/:pushId/original
// // [START addMessageTrigger]
// exports.addMessage = functions.https.onRequest(async (req, res) => {
// // [END addMessageTrigger]
//   // Grab the text parameter.
//   const original = req.query.text;
//   // [START adminSdkPush]
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   const snapshot = await admin.database().ref('/messages').push({original: original});
//   // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//   res.redirect(303, snapshot.ref.toString());
//   // [END adminSdkPush]
// });
// // [END addMessage]

// [START makeUppercase]
// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
const makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });











// // Online testing
//  const testEnv = functions({
//     databaseURL: 'https://sype-privacy.firebaseio.com',
//     storageBucket: 'sype-privacy.appspot.com',
//     projectId: 'sype-privacy'

//  }, './service-account.json');

// //Provide 3rd party API keys
//  testEnv.mockConfig({ someapi: {key: 'abc123'}});



describe('test suite' , () => {
    let myFunctions;
    beforeAll(()=> {
        myFunctions = makeUppercase;
    });


    describe('makeUpperCase', () => {
        // Test Case: setting messages/11111/original to 'input' should cause 'INPUT' to be written to
        // messages/11111/uppercase
        it('should upper case input and write it to /uppercase', () => {
          // [START assertOnline]
          // Create a DataSnapshot with the value 'input' and the reference path 'messages/11111/original'.
          const snap = test.database.makeDataSnapshot('input', 'messages/11111/original');
    
          // Wrap the makeUppercase function
          const wrapped = test.wrap(myFunctions.makeUppercase);
          // Call the wrapped function with the snapshot you constructed.
          return wrapped(snap).then(() => {
            // Read the value of the data at messages/11111/uppercase. Because `admin.initializeApp()` is
            // called in functions/index.js, there's already a Firebase app initialized. Otherwise, add
            // `admin.initializeApp()` before this line.
            return admin.database().ref('messages/11111/uppercase').once('value').then((createdSnap) => {
              // Assert that the value is the uppercased version of our input.
              assert.equal(createdSnap.val(), 'INPUT');
            });
          });
          // [END assertOnline]
        })
      });



});