import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC2fTiStp6cF8MAN0xjZ0aDwWBSeTIUuG8',
  authDomain: 'shun-next-practice.firebaseapp.com',
  projectId: 'shun-next-practice',
  storageBucket: 'shun-next-practice.appspot.com',
  messagingSenderId: '819786459493',
  appId: '1:819786459493:web:32bfdc337f2a3f789e198c',
}

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(config)

export default firebase
export const db = firebase.firestore()
export const auth = firebase.auth()
