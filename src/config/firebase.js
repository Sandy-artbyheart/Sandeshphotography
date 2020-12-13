import firebase from 'firebase'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDK10F90RXYYF4SDxKewXzDl3B89ZaIGg0",
    authDomain: "sandesh-photography.firebaseapp.com",
    projectId: "sandesh-photography",
    storageBucket: "sandesh-photography.appspot.com",
    messagingSenderId: "910211001816",
    appId: "1:910211001816:web:1f39e5915c60a0dadc96ad",
    measurementId: "G-HSGELM75DY"
}

firebase.initializeApp(config)

const storage = firebase.storage()

export default storage