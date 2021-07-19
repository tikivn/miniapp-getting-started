const init = () => ({
  latitude: 10.779693436530149,
  longitude: 106.67971686137946,
  markers: [],
  polygon: [],
  polyline: [],
  zoom: 10,
  circles: []
});

Page({
  data: {
    apiKey: 'AIzaSyDY6f-OwKoI7g7VtWUcBhKKieXfyHKBHw8',
    ...init()
  },
  resetMap() {
    this.setData({ ...init() });
  },
  onMarkerTap(event) {
    console.log('onMarkerTap', event); 
  },
  onTap(event) {
    console.log('onTap', event); 
  },
  showPolyline() {
    this.setData({
      zoom: 3,
      latitude: 0,
      longitude: -180,
      polyline: [{
        strokeColor: "#FF0000",
        strokeWidth: 2,
        points: [
          { latitude: 37.772, longitude: -122.214 },
          { latitude: 21.291, longitude: -157.821 },
          { latitude: -18.142, longitude: 178.431 },
          { latitude: -27.467, longitude: 153.027 },
        ]
      }]
    });
  },
  showPolygon() {
    this.setData({
      zoom: 5,
      latitude: 24.886,
      longitude: -70.268,
      polygon: [{
        strokeColor: "#FF0000",
        strokeWidth: 2,
        fillColor: "#FF0000",
        points: [
          { latitude: 25.774, longitude: -80.19 },
          { latitude: 18.466, longitude: -66.118 },
          { latitude: 32.321, longitude: -64.757 },
          { latitude: 25.774, longitude: -80.19 },
        ]
      }]
    });
  },
  showCircle() {
    const citymap = {
      chicago: {
        latitude: 41.878,
        longitude: -87.629,
        population: 2714856,
      },
      newyork: {
        latitude: 40.714,
        longitude: -74.005,
        population: 8405837,
      },
      losangeles: {
        latitude: 34.052,
        longitude: -118.243,
        population: 3857799,
      },
      vancouver: {
        latitude: 49.25,
        longitude: -123.1,
        population: 603502,
      },
    };
    this.setData({
      zoom: 4,
      latitude: 41.878,
      longitude: -87.629,
      circles: Object.keys(citymap).map((key) => ({
        strokeColor: "#FF0000",
        strokeWidth: 2,
        fillColor: "#FF0000",
        latitude: citymap[key].latitude,
        longitude: citymap[key].longitude,
        radius: Math.sqrt(citymap[key].population) * 100,
      })) 
    });
  },
  showMarker() {
    this.setData({
      zoom: 4,
      latitude: -25.363,
      longitude: 131.044,
      markers: [{
        id: '1',
        latitude: -25.363,
        longitude: 131.044,
      }]
    });
  }
})
