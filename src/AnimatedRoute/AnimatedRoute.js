import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import { toTapHouse } from './api';
import { bgColor } from '../style';
export default function AnimatedRoute(props) {
  const [route, setRoute] = useState(undefined);
  const getRoute = () => {
    if (route) setRoute(undefined);
    else setRoute(toTapHouse);
  };
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [geoJson, setGeoJson] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: []
        }
      }
    ]
  });
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2l5NGg2Y3ljMDAxaTJ5bHF5aXF0NHRuciJ9.aVkFfSGQhUYb9bmf4JtkTg';
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/haakseth/cjqwfdluz04nt2rnu04yd2ik4',
        center: [12.567, 55.672],
        zoom: 14
      });

      mapboxMap.on('load', () => {
        setMap(mapboxMap);
        mapboxMap.addLayer({
          id: 'line-animation',
          type: 'line',
          source: {
            type: 'geojson',
            data: geoJson
          },
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-color': '#ed6498',
            'line-width': 10,
            'line-opacity': 0.8
          }
        });
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
    /*eslint-disable-next-line */
  }, [map]);

  useEffect(() => {
    if (route) {
      // map.fitBounds(route.features[0].bbox, { padding: 200 });
      animateLine();
    } else {
      setGeoJson({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: []
            }
          }
        ]
      });
    }
    /*eslint-disable-next-line */
  }, [route]);
  useEffect(() => {
    if (geoJson && map) {
      // console.log(geoJson.features[0].geometry.coordinates);
      map.getSource('line-animation').setData(geoJson);
    }
    /*eslint-disable-next-line */
  }, [geoJson]);
  // const [animation, setAnimation] = useState(undefined);
  let progress = 0;
  const animateLine = () => {
    const speedFactor =
      geoJson.features[0].geometry.coordinates.length > 300 ? 300 : 1;
    if (progress < route.features[0].geometry.coordinates.length - 1) {
      // append new coordinates to the lineString
      geoJson.features[0].geometry.coordinates.push(
        route.features[0].geometry.coordinates[progress]
      );
      progress += speedFactor;
      setGeoJson({ ...geoJson });

      // Request the next frame of the animation.
      requestAnimationFrame(animateLine);
    } else {
      setGeoJson(route);
    }
  };
  const renderVignette = () => {
    if (props.vignette) {
      return <Vignette />;
    }
    return null;
  };
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
      }}
      onTouchMove={e => e.stopPropagation()}
      ref={el => (mapContainer.current = el)}
    >
      <GetRoute onClick={getRoute}>Klik</GetRoute>
      {renderVignette()}
    </div>
  );
}

const Vignette = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  box-shadow: inset 0px 0px 150px 60px rgba(0, 0, 0, 0.8);
`;
const GetRoute = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 20px;
  height: 30px;
  width: 60px;
  background-color: ${bgColor};
  outline: none;
  border: solid 1px #ccc;
  box-shadow: 0 4px 12px 0 rgba(16, 42, 67, 0.2);
`;
