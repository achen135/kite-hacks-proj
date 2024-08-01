
import { useState, useEffect } from "react"
import { db } from '../../../config/firebase'

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
}   from "firebase/firestore"

export default function Business() {
    const business = {
        Name: {newName},
        Type: {newLocation},
        Location: {newType},
        RequiredItems: {newRequiredItems}
    }

    const [newName, setNewName] = useState("")
    const [newLocation, setNewLocation] = useState("mom's")
    const [newType, setNewType] = useState("nuclear power")
    const [newRequiredItems, setNewRequiredItems] = useState("eggs_debug")

    const [businesses, setBusinesses] = useState([])

    const createBusiness = async () => {
        await addDoc(collection(db, "businesses"), { name: newName, type: newType, location: newLocation, requiredItems: newRequiredItems})
        getBusinesses()
    }

    const getBusinesses = async () => {
        const data = await getDocs(collection(db, "businesses"))
        setBusinesses(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const deleteBusiness = async (id) => {
        await deleteDoc(doc(db, "businesses", id))
        getBusinesses()
    }

    return (
      <>
        <div id="business">
            <h1>Name: {business.Name}</h1>
            <p>Type: {business.Type}</p>
        </div>
      </>
    )
}
