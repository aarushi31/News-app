import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyDgOIqNo_sC8Xz-gehCRRWuUgpNWd_9uMU",
    authDomain: "ig-app-33350.firebaseapp.com",
    databaseURL: "https://ig-app-33350-default-rtdb.firebaseio.com",
    projectId: "ig-app-33350",
    storageBucket: "ig-app-33350.appspot.com",
    messagingSenderId: "628094282937",
    appId: "1:628094282937:web:b1f148183574328f62bf68"
}
const fire=firebase.initializeApp(firebaseConfig);

export default fire;