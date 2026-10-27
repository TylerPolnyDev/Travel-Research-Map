// Amazon Location Service resource names:
import { MAP_NAME, PLACE_NAME, REGION, API_KEY } from './auth.js';
const mapName = MAP_NAME;
const placesName = PLACE_NAME;
const region = REGION;
const apiKey = API_KEY;

// Initialize a map
async function initializeMap() {
    const mlglMap = new maplibregl.Map({
        container: "map", // HTML element ID of map element
        center: [-103.771556, 44.967244],
        zoom: 3.5,
        style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`, // Defines the appearance of the map and authenticates using an API key
    });

    // Add navigation control to the top left of the map
    mlglMap.addControl(new maplibregl.NavigationControl(), "top-left");

    return mlglMap;
}

async function main() {
    // Initialize map and Amazon Location SDK client:
    const map = await initializeMap();
}

main();