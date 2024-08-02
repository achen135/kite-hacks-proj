import React, { useEffect, useState } from 'react'
import { loadGoogleMaps } from '../../../utils/apis/LoadMap'
import { db } from '../../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import './MapPage.css'

const MapPage = () => {
  const [businesses, setBusinesses] = useState([])
  const [userLocation, setUserLocation] = useState(null)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'businesses'))
        const businessList = querySnapshot.docs.map(doc => doc.data())
        setBusinesses(businessList);
      } catch (error) {
        console.error("Error fetching businesses: ", error)
      }
    }

    fetchBusinesses()
  }, [])

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = auth.currentUser
        if (user) {
          const userDoc = await getDoc(doc(db, 'businesses', user.uid))
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role)
          }
        }
      } catch (error) {
        console.error("Error fetching user role: ", error)
      }
    }

    fetchUserRole()
  }, [])

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          (error) => {
            console.error("Error getting location: ", error)
            setUserLocation({
              lat: -34.397,
              lng: 150.644,
            })
          }
        )
      } else {
        setUserLocation({
          lat: -34.397,
          lng: 150.644,
        })
      }
    }

    getCurrentLocation()
  }, [])

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const googleMaps = await loadGoogleMaps();
        const map = new googleMaps.Map(document.getElementById('map'), {
          center: userLocation,
          zoom: 12,
          zoomControl: true,
          mapTypeControl: false
        })

        const infoWindow = new googleMaps.InfoWindow();

        businesses
        .forEach(business => {
          if (business.location) {
            const marker = new googleMaps.Marker({
              position: { lat: business.location.latitude, lng: business.location.longitude },
              map,
              title: business.name || 'Business',
            })

            marker.addListener('click', () => {
              infoWindow.setContent(`
                <div class="map-infowindow">
                  <h1 style="font-size: 28px; text-align: center">${business.name}</h1>
                  <p><strong>Email:</strong> ${business.email || 'N/A'}</p>
                  <p><strong>Phone:</strong> ${business.phone || 'N/A'}</p>
                  <p><strong>Description:</strong> ${business.description || 'No description available'}</p>
                </div>
              `)
              infoWindow.open(map, marker)
            })
          }
        })
      } catch (err) {
        console.error(err)
      }
    };

    if (userLocation) {
      initializeMap()
    }
  }, [businesses, userLocation])

  return (
    <div id="map" style={{ height: '100vh', width: '100%' }}></div>
  )
}

export default MapPage