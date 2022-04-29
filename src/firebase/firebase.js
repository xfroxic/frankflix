import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
};

const app = initializeApp(firebaseConfig)

// Create firebase db & auth
const db = getFirestore(app)

// export firebase database and firebase auth for later use.
export { db };