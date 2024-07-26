import { useState, useEffect } from "react"
import { db } from './firebase'

import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
}   from "firebase/firestore"

function Info() {
    const [newName, setNewName] = useState("")

    {/*more information when I can confirm that this shit works*/}
    // const [newLocation, setNewLocation] = useState("grove street")
    // const [newRequiredItems, setNewRequiredItems] = useState("eggs_debug")
    // , type: Type, location: newLocation, requiredItems: newRequiredItems

    const [businesses, setNewBusinesses] = useState([])

    const createBusiness = async () => {
        await addDoc(collection(db, "businesses"), { name: newName})
        getBusinesses()
    }

    const getBusinesses = async () => {
        const data = await getDoc(collection(db, "businesses"))
        setBusinesses(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const deleteBusiness = async (id) => {
        await deleteDoc(doc(db, "businesses", id))
        getBusinesses()
    }
    
    useEffect(() => {
        getBusinesses()
    }, [])

    return (
      <>
        <h>very cool thing that works</h>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewName(event.target.value)
          }}
        />
        <button onClick={createBusiness}>Add</button>
        <button onClick={deleteBusiness}>Delete</button>
          {businesses.map((businesses) => (
            <div key={businesses.id}>
              <h2>Name: {businesses.name}</h2>
            </div>
          ))}
      </>
    )
}

export default Info