import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox-override.css';
import produce from 'immer';
import diffStyles from './diff';
import Vignette from '../../components/Vignette';
export default function SelectFeature() {
  const mapContainer = useRef();
  const [map, setMap] = useState(undefined);
  const [selectedBuilding, setSelectedBuilding] = useState(undefined);
  const [style, setStyle] = useState(undefined);
  const [defaultStyle, setDefaultStyle] = useState(undefined);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2sycDl0cHF3MDF6ZjNlbzZtbm9maXJjeiJ9.AKnQ0IMwoETT_Tci3rDTSQ';
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/haakseth/cjpu9croe057l2sqwj25p4gje',
        center: [12.57, 55.675],
        zoom: 17,
        maxBounds: [[12.55, 55.66], [12.58, 55.68]]
      });
      mapboxMap.on('load', () => {
        setMap(mapboxMap);
        // Lag for selected building
        mapboxMap.addLayer(
          {
            id: 'selected-building',
            source: 'composite',
            'source-layer': 'building',
            type: 'fill',
            paint: {
              'fill-color': '#bba072',
              'fill-opacity': 0.8
            },
            filter: ['==', 'id', -1]
          },
          'Building Fill'
        );

        // gemmer defaultStyle i en variabel, så vi kan reverte til den
        setDefaultStyle(mapboxMap.getStyle());
        // producerer en immutable version af defaultstyle til at starte med
        setStyle(produce(mapboxMap.getStyle(), draft => {}));
        mapboxMap.on('click', e => {
          const features = mapboxMap.queryRenderedFeatures(e.point);
          const buildings = features.filter(f => {
            return f.sourceLayer === 'building';
          });
          // console.log(buildings);
          if (buildings.length) {
            setSelectedBuilding(buildings[0]);
          } else {
            setSelectedBuilding(undefined);
          }
        });
        mapboxMap.on('mousemove', e => {
          const features = mapboxMap.queryRenderedFeatures(e.point);
          const buildings = features.filter(f => {
            return f.sourceLayer === 'building';
          });
          if (buildings.length) {
            mapboxMap.getCanvas().style.cursor = 'pointer';
          } else {
            mapboxMap.getCanvas().style.cursor = '';
          }
        });
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
    /* eslint-disable-next-line */
  }, [map]);

  const prevStyle = usePrevious(style);
  useEffect(() => {
    // første gangen style ændres er når kortet loades,
    // så da behøver vi ikke gøre noget
    if (prevStyle) {
      const changes = diffStyles(prevStyle, style);
      changes.forEach(change => {
        if (change.command === 'updateSource') {
          // This is a workaround patch for updateSource not being
          // low level enough for a generic apply command - dff.js has also
          // been patched.
          map.getSource(change.args[0]).setData(change.args[1].data);
        } else {
          map[change.command].apply(map, change.args);
        }
      });
    }
    /* eslint-disable-next-line */
  }, [style]);

  useEffect(() => {
    if (style) {
      setStyle(
        selectedBuilding
          ? produce(style, newStyle => {
              newStyle.layers.forEach(l => {
                if (l.id === 'Building Fill') {
                  l.paint['fill-opacity'] = 0.3;
                }
              });
            })
          : produce(defaultStyle, () => {})
      );
      const filter = selectedBuilding
        ? [
            'all',
            ...Object.keys(selectedBuilding.properties).map(p => {
              return ['==', p, selectedBuilding.properties[p]];
            })
          ]
        : ['==', 'id', -1];
      map.setFilter('selected-building', filter);
    }
    /* eslint-disable-next-line */
  }, [selectedBuilding]);
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
      <Vignette />
    </div>
  );
}

/* https://usehooks.com/usePrevious/ */
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
