import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { NavigationControl } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Panel from './components/Panel';
import { useMedia } from './hooks/useMedia';

export default function Streets() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [streets, setStreets] = useState([]);
  const [hoveredStreet, setHoveredStreet] = useState('');

  const isSmallScreen = useMedia([`(max-width: 600px)`], [true], false);
  const getMapStreets = () => {
    const features = map.queryRenderedFeatures({
      layers: ['road']
    });
    const keys = new Set();
    const primaryRoads = features
      .map(f => f.properties.name)
      .filter(street => {
        if (!street || keys.has(street)) {
          return false;
        }
        keys.add(street);
        return true;
      })
      .sort((a, b) => {
        if (a > b) return 1;
        return -1;
      });

    setStreets(primaryRoads);
  };
  useEffect(() => {
    if (map) {
      getMapStreets();
      map.on('mousemove', e => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['road']
        });
        if (features.length) {
          map.getCanvas().style.cursor = 'pointer';
          setHoveredStreet(features[0].properties.name);
        } else {
          map.getCanvas().style.cursor = '';
        }
      });
      map.on('moveend', getMapStreets);
    }
    // eslint-disable-next-line
  }, [map]);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2sycDl2NGtzMDIwNzNubG5zdndram44NiJ9.0n2hr2WOJmnC1kNFyq7s_Q';
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/haakseth/ck2kw48j83sjy1cpohx5kqxou',
        center: [12.57, 55.67],
        zoom: 10,
        maxZoom: 16
      });

      mapboxMap.on('load', () => {
        mapboxMap.addLayer(
          {
            id: 'hovered-street',
            source: 'composite',
            'source-layer': 'road',
            type: 'line',
            paint: {
              'line-color': '#ed6498',
              'line-width': [
                'interpolate',
                ['exponential', 2],
                ['zoom'],
                5,
                0.5,
                12,
                3,
                18,
                30
              ]
            },
            filter: ['==', 'name', '']
          },
          'road-label'
        );
        mapboxMap.addControl(
          new NavigationControl({ showCompass: false }),
          'top-left'
        );
        setMap(mapboxMap);
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
    /*eslint-disable-next-line */
  }, [map]);

  useEffect(() => {
    if (map) {
      map.setFilter('hovered-street', [
        '==',
        'name',
        hoveredStreet ? hoveredStreet : ''
      ]);
    }
    // eslint-disable-next-line
  }, [hoveredStreet]);
  const onStreetClick = street => {
    const features = map
      .queryRenderedFeatures({
        layers: ['road']
      })
      .filter(f => {
        return f.properties.name === street;
      });
    if (features.length) {
      //https://docs.mapbox.com/mapbox-gl-js/example/zoomto-linestring/
      try {
        var coordinates = features[0].geometry.coordinates;
        // Pass the first coordinates in the LineString to `lngLatBounds` &
        // wrap each coordinate pair in `extend` to include them in the bounds
        // result. A variation of this technique could be applied to zooming
        // to the bounds of multiple Points or Polygon geomteries - it just
        // requires wrapping all the coordinates with the extend method.
        var bounds = coordinates.reduce(function(bounds, coord) {
          return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

        map.fitBounds(bounds, {
          padding: isSmallScreen
            ? 0
            : { top: 200, bottom: 200, right: 430, left: 200 }
        });
      } catch (error) {
        // console.log(error);
      }
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
      <Panel
        toggled={streets.length}
        streets={streets}
        hoveredStreet={hoveredStreet}
        setHoveredStreet={setHoveredStreet}
        onStreetClick={onStreetClick}
      />
    </div>
  );
}
