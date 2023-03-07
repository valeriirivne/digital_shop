import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore } from 'firebase/firestore';
import { collection, add, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCm-KnxKylE0KZ7_pizkjo2H6gKSHfBNng',
  authDomain: 'digital-shop-d91eb.firebaseapp.com',
  projectId: 'digital-shop-d91eb',
  storageBucket: 'digital-shop-d91eb.appspot.com',
  messagingSenderId: '104914923385',
  appId: '1:104914923385:web:c8542b31380117d7d7c9a8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
console.log(db);
// export const db = firebase.firestore();

const addProductToFirestore = async (product, userId) => {
  try {
    const cartCollectionRef = collection(db, 'users', userId, 'cart');
    const docRef = await addDoc(cartCollectionRef, product);
    console.log('Product added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding product to Firestore: ', error);
  }
};

export { addProductToFirestore };
