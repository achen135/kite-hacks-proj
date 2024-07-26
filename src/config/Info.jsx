import { useState, useEffect } from "react"
import { db } from './firebase'

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
}   from "firebase/firestore"

function Info() {
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
          <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewLocation(event.target.value)
          }}
        />
          <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewType(event.target.value)
          }}
        />
          <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewRequiredItems(event.target.value)
          }}
        />

        <button onClick={createBusiness}>Add</button>
        <button onClick={deleteBusiness}>Delete</button>
          {businesses.map((businesses) => (
            <div key={businesses.id}>
              <h2>Name: {businesses.name}
                  Type: {businesses.type}
                  Location: {businesses.location}
                  Required Items: {businesses.requiredItems}
              </h2>
            </div>
          ))}
      </>
    )
}

export default Info