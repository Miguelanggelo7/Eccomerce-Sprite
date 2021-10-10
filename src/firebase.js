import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwBVzYpzJyYn5DIzjGXVABwgpJtQRmeF8",
    authDomain: "ecommerce-turkito.firebaseapp.com",
    projectId: "ecommerce-turkito",
    storageBucket: "ecommerce-turkito.appspot.com",
    messagingSenderId: "402386817695",
    appId: "1:402386817695:web:90f0a38e75a41be0c188aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}