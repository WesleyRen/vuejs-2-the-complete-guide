// check out https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8
import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAiF4pMbAwxfJ75vozezipnMhBJP4oNU2s",
  authDomain: "http-vuejs-855ab.firebaseapp.com",
  databaseURL: "https://http-vuejs-855ab.firebaseio.com",
  projectId: "http-vuejs-855ab",
  storageBucket: "http-vuejs-855ab.appspot.com",
  messagingSenderId: "827118806987"
};
const app = Firebase.initializeApp(config);
const db = app.database();
const ecosRef = db.ref('ecoSystems');
export default ecosRef;
