import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/storage"
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAvnDJ6CrFVDIkcU64zSxupxIQGQugC_3E",
    authDomain: "reels-3709d.firebaseapp.com",
    projectId: "reels-3709d",
    storageBucket: "reels-3709d.appspot.com",
    messagingSenderId: "963643801211",
    appId: "1:963643801211:web:57d7fafc4d384f484decde"
})
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database={
    users:firestore.collection('user'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();
// export default firebase;