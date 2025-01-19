const coordinates = listing.geometry.coordinates; // Ensure geometry exists
if (coordinates && coordinates.length === 2) {
  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: 'map',
    center: coordinates,
    zoom: 9
  });

  const el = document.createElement('div');
  el.className = 'fa-regular fa-compass';

  new mapboxgl.Marker(el)
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML("<p>Exact location provided after booking.</p>"))
    .addTo(map);
} else {
  console.error("Invalid or missing coordinates:", coordinates);
  alert("Map could not be loaded. Location data is missing.");
}
