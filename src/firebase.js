import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCqd0_HxaakU2sM1hYjM3T2FOJr67OXW_8",
    authDomain: "smart-kara.firebaseapp.com",
    databaseURL: "https://smart-kara.firebaseio.com",
    projectId: "smart-kara",
    storageBucket: "smart-kara.appspot.com",
    messagingSenderId: "1006019656130",
    appId: "1:1006019656130:web:aa8e29cc990bf956"
};
firebase.initializeApp(config);
export default firebase;