// Amazon Location Service resource names:
const mapName = "arn:aws:geo:us-east-1:905154037226:map/Travel_Research_Map";
const placesName = "arn:aws:geo:us-east-1:905154037226:place-index/TRM_Place_Index";
const region = "us-east-1";
const apiKey = "v1.public.eyJqdGkiOiI0OGNkMjE1Ny1iMWFjLTQwOGItYmUzMi00NzgxYWU4YTQ2MDEifY1fyQyzNZl3FYcyzOsRts9ad7Pi-rlTnVxPQqCOmGORtydw9UgXhj48isYe_RRHZ4wpNwxjFC6LyMfC1UXswSr3nRclgwJd15YTyOAn22puQykhha41v_-FUzGXMqJsfgpqfw_MmK5A4WtBQ0TnG02qKxJf-IVqOlficYCTJtYuOPgESg4y-ncZHHjLIPt8ZotbG-zBVselesvLkI7gTlbqC4ti03yq4lD-SOF1cFJSgEMgiUObnJ-13c40aXhSCIi6-7Hcks7rYdKt9895Mf7FiTOhkXkXtpsxjJlKptLQ8RKhthIP7wYX4lATxcFxxRNMWE8bIPjDx7tFo3-m_2k.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";

// Initialize a map
async function initializeMap() {
    const mlglMap = new maplibregl.Map({
        container: "map", // HTML element ID of map element
        center: [-77.03674, 38.891602], // Initial map centerpoint
        zoom: 16, // Initial map zoom
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