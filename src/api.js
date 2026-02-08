
import {getFirestore,collection,getDocs,doc,getDoc,query,where} from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdJaQpQMK9cD4vtVX0WqUl6uwXsrUHMnU",
  authDomain: "van-life-b7c94.firebaseapp.com",
  projectId: "van-life-b7c94",
  storageBucket: "van-life-b7c94.firebasestorage.app",
  messagingSenderId: "783041097284",
  appId: "1:783041097284:web:734f6cc4de2aa43df0d611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

const vansCollectionRef=collection(db,"users")

export async function getVans(){
    const snapshot= await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}
export async function getVan(id){
    const docRef = doc(db,"users",id)
    const snapshot = await getDoc(docRef)
    return{
        ...snapshot.data(),
        id:snapshot.id
    }
}
export async function getHostVans(){
    const q= query(vansCollectionRef,where("hostId","==","123"))
    const snapshot= await getDocs(q)
    const vans = snapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
    }))
    return vans
}




export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
   
     const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data
}