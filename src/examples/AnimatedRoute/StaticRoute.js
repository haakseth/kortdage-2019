import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import {
  toTapHouse as routeFromApi
  // toOslo as routeFromApi
} from "./api";
import Vignette from "../../components/Vignette";
export default function StaticRoute() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [route, setRoute] = useState(undefined);
  const [geoJson, setGeoJson] = useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: []
        }
      }
    ]
  });

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2sycDl0cHF3MDF6ZjNlbzZtbm9maXJjeiJ9.AKnQ0IMwoETT_Tci3rDTSQ";
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/haakseth/cjqwfdluz04nt2rnu04yd2ik4",
        center: [12.566, 55.673],
        // center: [11.91, 57.8],
        zoom: 14
      });

      mapboxMap.on("load", () => {
        setMap(mapboxMap);
        mapboxMap.addLayer({
          id: "line-animation",
          type: "line",
          source: {
            type: "geojson",
            data: geoJson
          },
          layout: {
            "line-cap": "round",
            "line-join": "round"
          },
          paint: {
            "line-color": "#ed6498",
            "line-width": 10,
            "line-opacity": 0.8
          }
        });
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (geoJson && map) {
      map.getSource("line-animation").setData(geoJson);
    }
  }, [geoJson, map]);

  useEffect(() => {
    if (route) {
      // vis rute
      setGeoJson(routeFromApi);
    } else {
      setGeoJson({
        // reset lag
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: []
            }
          }
        ]
      });
    }
    /*eslint-disable-next-line */
  }, [route]);

  const getRoute = () => {
    if (!route) {
      setRoute(routeFromApi);
    } else {
      setRoute(undefined);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "none"
      }}
      ref={el => (mapContainer.current = el)}
    >
      <GetRoute onClick={getRoute}>Rute</GetRoute>
      <Vignette />
    </div>
  );
}
const GetRoute = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 4;
  top: 10px;
  left: 10px;
  height: 30px;
  width: 60px;
  background-color: #eeffff;
  outline: none;
  border: solid 1px #ccc;
  box-shadow: 0 4px 12px 0 rgba(16, 42, 67, 0.2);
`;
