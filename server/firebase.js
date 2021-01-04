import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
	apiKey: process.env.MOODIO_FIREBASE_API_KEY,
	authDomain: process.env.MOODIO_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.MOODIO_FIREBASE_PROJECT_ID,
	storageBucket: process.env.MOODIO_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.MOODIO_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.MOODIO_FIREBASE_APP_ID,
});

export const auth = app.auth()
export default app