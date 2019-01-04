#!/usr/bin/env node

const fetch = require("node-fetch");
const simplify = require("simplify-geojson");

const run = async (place, tolerance) => {
  const osmData = (await (await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&polygon_geojson=1&format=json`
  )).json())[0];
  const input = {
    type: "Feature",
    properties: {
      name: osmData["display_name"]
    },
    geometry: osmData.geojson
  };
  const simplified = simplify(input, tolerance);
  console.log(JSON.stringify(simplified, null, 2));
};

if (process.argv.length < 3 || ["-h", "--help"].includes(process.argv[2])) {
  console.log(`Usage: ./geoborder.js place [tolerance]`);
  console.log(
    `Tolerance: 0 (lots of points) to 1 (few points), default is 0.005`
  );
  console.log(`Examples:`);
  console.log(`./geoborder.js "karlovarsky kraj"`);
  console.log(`./geoborder.js plzen 0.01`);
  console.log(`./geoborder.js "arad, romania"`);
  console.log(`./geoborder.js "arad, israel"`);
  process.exit(0);
}

const place = process.argv[2];
const tolerance = process.argv[3] || 0.005;

run(place, tolerance);
