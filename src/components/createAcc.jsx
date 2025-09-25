import React from "react";
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const [logged, setLogged] = React.useState(false)

function createAcc () {

}