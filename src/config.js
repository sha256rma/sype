import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyALBJMW5dNam5Npuokus2y3DuRdd-X27fE",
    authDomain: "sype-privacy.firebaseapp.com",
    databaseURL: "https://sype-privacy.firebaseio.com",
    projectId: "sype-privacy",
    storageBucket: "sype-privacy.appspot.com",
    messagingSenderId: "993626699623",
    appId: "1:993626699623:web:f4eb788c9af6a3f5fd61c2",
    measurementId: "G-R79D700HJ2"
};

// let config = {
//   apiKey: 'AIzaSyALBJMW5dNam5Npuokus2y3DuRdd-X27fE',
//   authDomain: 'sype-privacy.firebaseapp.com',
//   databaseURL: 'https://sype-privacy.firebaseio.com',
//   projectId: 'sype-privacy',
//   storageBucket: 'sype-privacy.appspot.com',
//   messagingSenderId: '993626699623',
//   appId: '1:993626699623:web:f4eb788c9af6a3f5fd61c2',
//   measurementId: 'G-R79D700HJ2',
// };

let app = Firebase.initializeApp(config);
export const db = app.database();
