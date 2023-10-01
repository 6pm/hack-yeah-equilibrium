"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { generateRandomPolygon } from "./utils";

const randomLatitude = 52.2297;
const randomLongitude = 21.0122;

export default function MapPage() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2xhdmEyMTAyIiwiYSI6ImNsbjBpZG5ybTFyN2UyaW1vcjVlbGtxenkifQ.m7wzw1BwEjvghzGU1GWNLw"; // replace with your token

    const map = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainerRef.current,
      style: "mapbox://styles/slava2102/cln0trawb033101qxhp49d4zo",
      center: [randomLongitude, randomLatitude],
      zoom: 13,
      scrollZoom: false,
    });

    // Add a circle layer once the map is loaded:
    map.on("load", () => {
      // Add a data source for the circle:
      map.addSource("circleSource", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [randomLongitude, randomLatitude],
              },
              properties: {},
            },
          ],
        },
      });

      // Add a circle layer referencing the data source:
      map.addLayer({
        id: "circleLayer",
        type: "circle",
        source: "circleSource",
        paint: {
          "circle-radius": 100, // radius in meters; adjust as needed
          "circle-color": "#007cbf",
          "circle-opacity": 0.5, // 50% opacity
        },
      });
    });

    return () => map.remove(); // cleanup method to remove map on component unmount
  }, []);

  return (
    <div ref={mapContainerRef} className=" h-full w-full rounded shadow" />
  );
}
