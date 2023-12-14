// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGv7Ot6CKcqnEzvenBurlTZ5f_kugVoE0",
  authDomain: "photopholio-f36f2.firebaseapp.com",
  projectId: "photopholio-f36f2",
  storageBucket: "photopholio-f36f2.appspot.com",
  messagingSenderId: "461753486144",
  appId: "1:461753486144:web:2d1d0f943225358a1848a5"
};

const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };