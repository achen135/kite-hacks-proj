import React, { useEffect } from 'react';
import { loadGoogleMaps } from '../../../utils/apis/LoadMap'
import './MapPage.css'

const MapPage = () => {
  useEffect(() => {
    const initializeMap = async () => {
      const { Map, Marker } = await loadGoogleMaps();
      const map = new Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      new Marker({
        position: { lat: -34.397, lng: 150.644 },
        map,
        title: 'Hello World!',
      });
    };

    initializeMap();
  }, []);

  return (
    <div id="map"></div>
  );
};

export default MapPage;