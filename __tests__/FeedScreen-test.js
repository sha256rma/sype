
// import 'react-native';
// import React from 'react';

// /** First pull in out database */
// import firestore from '@react-native-firebase/firestore';
// import { TestScheduler } from 'jest';
// import mockJestFireStore from 'firestore-jest-mock' //this isnt the correct path...

// /** This is my first attempt at mock testing. Using the firestore-jest-mock helper library */
// const {mockFirebase } = require('firestore-jest-mock'); // Note we can individually pull in. or just call all at once ^. 

// mockFirebase(
//     {
//         database: {
//             users: [{username: 'bujarsefa'}],
//             posts: [
//                 {
//                     dateCreated: '10-20-2019', 
//                     hearts: 2, 
//                     caption: '', 
//                     key: '123', 
//                     uid: 'abc', 
//                     username: 'bujarsefa'
//                 },
//                 {
//                     dateCreated: '10-20-2019', 
//                     hearts: 2, 
//                     caption: '', 
//                     key: '13', 
//                     uid: 'abc', 
//                     username: 'bujarsefa'
//                 },
//                 {
//                     dateCreated: '10-20-2019', 
//                     hearts: 2, 
//                     caption: '', 
//                     key: '12', 
//                     uid: 'abc', 
//                     username: 'bujarsefa'
//                 },
//             ]
//         }
//     }
// );




// fetchPosts = () => {
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
//   };


// const {makeCollections} = require('firestore-jest-mock/mocks/firestore');


// /** Writing comments for self, and for whoever else may be reading this.
//  * 1. First we must import the library
//  * 2. We must call the function mockFirebase, to make a pretend database. (These values should look 
//  * similar to what is stored on Firestore)
//  * 3. Next we begin by testing our functions
//  *  In this case, we will be testing the fetching posts function.
//  * Notice the very first difference between this unit test and previous unit test.
//  * First the call back of the test is in async/await.
//  * This is because we are depending on asyncnronush calls in our test
//  * in this case, the 'call' to our database and whatever queries we may run on it.
//  * If it is not async/await, then our test can return/assert before we even finalalize the calls with 
//  * fire store.
//  * Secondly, as stated in the documentation we must assume that firestore works.
//  * here we are not testing firestore, but rather our own functions
//  * in fetch post, we want to ensure:
//  *      a) that we are targetting the 'posts' collection ( ie posts table)
//  *      b) two (although we don't seem to have query parameters (conditions) )
//  *         we would also need to insure that those clauses or conditions match.
//  * 
//  */
// it( 'testing', async () =>{
//     /** Call our function that depends on db */
//     await fetchPosts();

//     expect(mockCollections).toHaveBeenCalledWith('posts');
//     expect
// });

// /** Look into expect.assertions() which takes in a number for the amount
//  * of expect statements in a testing block.
//  *  What this does (specifically in async) is it checks, 
//  * if our test pass based on what it does.
//  * Ie expect will pass as true, if the value that its waiting for
//  * is in pending state (ie what happens in asyncronous code)
//  * 
//  * 
//  * 
//  * So what can we do to guarantee this? Well we add a calll back to our test block
//  * and we call it at the end of our test. this makes sure that all tests actaully go through
//  * before reaching our 'done' (or whatever name) function (our callback).
//  * 
//  * 
//  * Another simplier way to the call back, is we can just return the clause that is waiting
//  * for a promise. 
//  * 
//  * (Asynchronous Test 2 video from Complete React Developer in 2020)
//  * 
//  */



// it('Trying fn mock from video', () => {
//     /** We know that our call will always return a promise. 
//      * here we will just say 'the promise always works, or it resolves.
//      * Remember that resolve also returns a promise. 
//      * We want to resolve to an object thats json. (remember . then -> JSON)
//      * the json is a promise, so json: () => Promise.resolve ({  })
//      * And then, we just create what the result of that would be. 
//     */



// fetchPosts = () => {
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
//   };





//     /** First we resolve the call to firebase  */
//     const posts = 'posts'; /** ie which collection we are looking for */
//     const mockFetch = jest.fn().mockReturnValue( Promise.resolve(
//         {
//             /** this returns a 'collection' callback function or Collection Reference Object
//              * we then use 'posts' as our parameter, because thats the colleection of
//              * files we are looking for
//              * https://rnfirebase.io/reference/firestore/collectionreference
//              */
//             CollectionReference: (posts) => Promise.resolve({
//                     json: () => Promise.resolve({posts: []})
//              } )
//         }
//     ) );


//     /** Scratch the above ^ I dont think its going to work (Only becasue I haven't seen any examples like it
//      * and dont know what to put after CollectionReference since we are calling onSnapshot function of collection.) */

// jest.mock('react-native-firebase', () => {
//     firestore: () => ({
//         collection: jest.fn()

//     })

// })
    




// });