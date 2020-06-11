import * as Location from 'expo-location';
const tenMwD = 0.0001;
const getLocation = incrememt => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      headnig: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 83.9856 + incrememt * tenMwD,
      latitude: 28.2096 + incrememt * tenMwD,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
