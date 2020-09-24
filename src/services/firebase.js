import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAhlFWOS9d0WQFaChkRokq8HSZdCm5Kq4Q',
	authDomain: 'react-image-gallery-8f638.firebaseapp.com',
	databaseURL: 'https://react-image-gallery-8f638.firebaseio.com',
	projectId: 'react-image-gallery-8f638',
	storageBucket: 'react-image-gallery-8f638.appspot.com',
	messagingSenderId: '862127881037',
	appId: '1:862127881037:web:fef0549c691526798c9504',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const fbStorage = firebase.storage()
const fbFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { fbStorage, fbFirestore, timeStamp }
