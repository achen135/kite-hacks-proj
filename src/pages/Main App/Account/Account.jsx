import React, { useState, useEffect } from 'react'
import './Account.css';
import { auth, db } from '../../../config/firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { GeoPoint } from 'firebase/firestore'

const Account = () => {
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")
  const [desc, setDesc] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'businesses', user.uid))
          if (userDoc.exists()) {
            const userData = userDoc.data()
            setUser(userData)
            setName(userData.name || "")
            setLat(userData.location?.latitude || "")
            setLong(userData.location?.longitude || "")
            setDesc(userData.description || "")
            setPhone(userData.phone || "")
            setRole(userData.role || "")
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        navigate('/kite-hacks-proj/auth')
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleSave = async () => {
    try {
      const latitude = parseFloat(lat)
      const longitude = parseFloat(long)

      if (isNaN(latitude) || isNaN(longitude)) {
        alert("Please enter valid latitude and longitude values");
        return
      }

      const location = (latitude && longitude) ? new GeoPoint(latitude, longitude) : null

      await updateDoc(doc(db, 'businesses', auth.currentUser.uid), {
        name: name,
        location: location,
        description: desc,
        phone: phone,
        role: role
      });

      setUser(prevUser => ({
        ...prevUser,
        name,
        location: location,
        description: desc,
        phone: phone,
        role: role
      }));
      setEditMode(false)
    } catch (err) {
      alert("Please fill in all fields")
      console.error(err)
    }
  }

  return (
    <div className='account-container'>
            <div className='account-circle-bg' id='circle1'>empty</div>
            <div className='account-circle-bg' id='circle2'>empty</div>
      <div className='account-info-container'>
        <h1>Account Information</h1>
        {user ? (
          <>
            {editMode ? (
              <div className='account-edit-container'>
                <div className='account-edit-field'>
                  <p>Name: </p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='account-edit-field'>
                  <p>Location: </p>
                  <input
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    placeholder='Latitude Coordinate'
                  />
                  <input
                    value={long}
                    onChange={(e) => setLong(e.target.value)}
                    placeholder='Longitude Coordinate'
                  />
                </div>
                <div className='account-edit-field'>
                  <p>Description: </p>
                  <textarea
                    value={desc}
                    rows={4}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder='Add a description'
                  />
                </div>
                <div className='account-edit-field'>
                  <p>Phone Number: </p>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone Number'
                  />
                </div>
                <div className='account-edit-role'>
                  <p>Role:</p>
                  <label>
                    <input
                      type="radio"
                      value="donator"
                      checked={role === 'donator'}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    Donator
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="receiver"
                      checked={role === 'receiver'}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    Receiver
                  </label>
                </div>
                <div className='account-edit-buttons'>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className='account-display-container'>
                <p><span>Name:</span> <br/>{user.name}</p>
                <p><span>Email:</span> <br/>{user.email}</p>
                <p><span>Phone:</span><br/>{user.phone || 'N/A'}</p>
                <p><span>Location:</span> <br/>{user.location ? `Latitude: ${user.location.latitude}, Longitude: ${user.location.longitude}` : 'N/A'}</p>
                <p><span>Description:</span> <br/>{user.description || 'N/A'}</p> 
                <p><span>Role:</span> <br/>{user.role || 'Not Chosen Yet'}</p>
                <button onClick={() => setEditMode(true)}> <img className='account-edit-btn' src="./icons/edit.png" alt="Edit" /> </button>
              </div>
            )}
          </>
        ) : (
          <p>Loading Information</p>
        )}
      </div>
    </div>
  )
}

export default Account