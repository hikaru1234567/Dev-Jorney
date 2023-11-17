
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const app =initializeApp ({
  apiKey: "AIzaSyA7ny0lv7ceIyRmKKqqPhttt_2RNNgpQEI",
  authDomain: "blog-49f4c.firebaseapp.com",
  projectId: "blog-49f4c",
  storageBucket: "blog-49f4c.appspot.com",
  messagingSenderId: "578162612355",
  appId: "1:578162612355:web:9618c1826ccbf8c43d23b6"
});

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export {auth, provider, db};