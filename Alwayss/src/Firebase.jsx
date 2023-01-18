
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {  getFirestore, collection, addDoc,  doc,  deleteDoc,  getDocs,} from 'firebase/firestore';
import {getStorage} from "firebase/storage"
import { useEffect } from "react";
import { useState } from "react";



const firebaseConfig = {
    apiKey: "AIzaSyDMmD2-UMebN0vV5FB0IBKNCWPRKeq3kGY",
    authDomain: "alwaysflix-login.firebaseapp.com",
    projectId: "alwaysflix-login",
    storageBucket: "alwaysflix-login.appspot.com",
    messagingSenderId: "282097616808",
    appId: "1:282097616808:web:20688a6cbfab3bebdebf9d",
    measurementId: "G-EERFRN2HQH"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()



export const signInWithGoogle = () => {

  signInWithPopup(auth, provider).then((result) => {

    const name = result.user.displayName;

    localStorage.setItem("name", name) 

  }).catch((error) =>{
    alert('ERROOOOOOOOO');
  })

};

/** upload files */

export const storage =getStorage(app);


/** aqui para links de parceiros */




    

    export const db = getFirestore(app);