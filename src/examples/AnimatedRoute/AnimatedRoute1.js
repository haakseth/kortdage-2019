import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { toTapHouse, toOslo } from './api';
import Vignette from '../../components/Vignette';
export default function Map() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [route, setRoute] = useState(undefined);

  const getRoute = oslo => {
    if (route) setRoute(undefined);
    else {
      if (oslo) {
        setRoute(toOslo);
      } else {
        setRoute(toTapHouse);
      }
    }
  };
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
        'pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2sycDl0cHF3MDF6ZjNlbzZtbm9maXJjeiJ9.AKnQ0IMwoETT_Tci3rDTSQ';
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/haakseth/cjqwfdluz04nt2rnu04yd2ik4',
        // center: [12.565948, 55.670915],
        center: [12.566, 55.671],
        zoom: 11
      });

      mapboxMap.on('load', () => {
        setMap(mapboxMap);
        mapboxMap.on('click', e => {
          console.log(e.lngLat);
        });
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
      // map.fitBounds(route.features[0].bbox, {
      //   padding: 200
      //   // speed: 10
      // });
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
    const antalpunkter = route.features[0].geometry.coordinates.length;
    if (progress < antalpunkter) {
      // append next coordinate pair to the lineString
      geoJson.features[0].geometry.coordinates.push(
        route.features[0].geometry.coordinates[progress]
      );
      progress++;
      setGeoJson({ ...geoJson });

      // Request the next frame of the animation.
      requestAnimationFrame(animateLine);
    } else {
      setGeoJson(route.originalRoute);
      progress = 0;
    }
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
        overflow: 'none'
      }}
      ref={el => (mapContainer.current = el)}
    >
      <GetRoute onClick={() => getRoute(false)}>Kort</GetRoute>
      <GetRoute style={{ left: 80 }} onClick={() => getRoute(true)}>
        Lang
      </GetRoute>
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
