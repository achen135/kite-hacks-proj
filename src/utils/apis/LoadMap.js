import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyDke7TnWgeC1dt3gJtlucR5oHizjjSeVHE",
  version: "weekly",
});

export const loadGoogleMaps = async () => {
  await loader.load();
  const { Map, Marker } = await google.maps.importLibrary('maps');
  return { Map, Marker };
};
