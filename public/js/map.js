mapboxgl.accessToken = mapToken; // Make sure mapToken is defined in EJS

const map = new mapboxgl.Map({
    container: 'map', // container ID (must exist in DOM)
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // Must be [lng, lat]
    zoom: 9
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
        )
    )
    .addTo(map);
