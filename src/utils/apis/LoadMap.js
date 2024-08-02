export const loadGoogleMaps = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {

      resolve(window.google.maps)
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDke7TnWgeC1dt3gJtlucR5oHizjjSeVHE&libraries=places`;
    script.onload = () => {
      resolve(window.google.maps);
    }
    script.onerror = () => {
      reject(new Error('Failed to load Google Maps API'));
    }
    document.head.appendChild(script);
  })
}
