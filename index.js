let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 8.95436161143863, lng: 125.53502443744682 },
    zoom: 8,
  });
}

initMap();
