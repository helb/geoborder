Gets region borders from OpenStreetMap and simplifies them with [maxogden/simplify-geojson](https://github.com/maxogden/simplify-geojson).

```
Usage: ./geoborder.js place [tolerance]
Tolerance: 0 (lots of points) to 1 (few points), default is 0.005
Examples:
./geoborder.js "karlovarsky kraj"
./geoborder.js plzen 0.01
./geoborder.js "arad, romania"
./geoborder.js "arad, israel"
```

[example results](./examples)