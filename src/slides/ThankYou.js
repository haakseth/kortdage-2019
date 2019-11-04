import React from 'react';
import { useMedia } from '../hooks/useMedia';
import { size, bgColor } from '../style';
import { ListWrapper, UL, A, Fill } from '../presentation';
export default function ThankYou() {
  const isSmallScreen = useMedia(
    [`(max-width: ${size.small}px)`],
    [true],
    false
  );
  return (
    <Fill
      column
      style={{
        color: bgColor,
        justifyContent: 'space-between',
        padding: '1em'
      }}
    >
      {/* eslint-disable-next-line */}
      <h1>Tak! 👌🥳🙏</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-evenly',
          width: '100vw',
          padding: 20
        }}
      >
        <ListWrapper>
          <h2>Fotokredits</h2>
          <UL>
            <li>
              <A href="https://unsplash.com/photos/5YtjgRNTli4">
                Thomas Kelley - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/U3Ptj3jafX8">
                Waldemar Brandt - Unsplash
              </A>
            </li>
            <li>
              <A href="https://unsplash.com/photos/1-29wyvvLJA">
                Andrew Neel - Unsplash
              </A>
            </li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>Links</h2>
          <UL>
            <li>
              <A href="https://haakseth.github.io/kortdage-2019/">
                Denne presentationen
              </A>
            </li>
            <li>
              <A href="https://github.com/haakseth/kortdage-2019/">
                Denne presentationens kode
              </A>
            </li>
            <li>
              <A href="https://openlayers.org/en/latest/examples/?q=animation">
                OpanLayers Animations
              </A>
            </li>
            <li>
              <A href="https://docs.mapbox.com/mapbox-gl-js/example/animate-a-line/">
                Mapbox GL - Animate a line
              </A>
            </li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>CodeSandboxes</h2>
          <UL>
            <li>Eksempel: Onboarding</li>
            <li>Eksempel: mapboxgl.setStyle()</li>
            <li>Eksempel: Animére rute</li>
          </UL>
        </ListWrapper>
        <ListWrapper>
          <h2>John Wika Haakseth</h2>
          <UL>
            <li>
              <A href="https://twitter.com/haakseth">Twitter</A>
            </li>
            <li>
              <A href="https://github.com/haakseth">Github</A>
            </li>
            <li>
              <A href="https://haakseth.com/">Hjemmeside</A>
            </li>
            <li>
              <A href="https://www.instagram.com/shakpup/">
                Shakas instagram - @shakpup
              </A>
            </li>
          </UL>
        </ListWrapper>
      </div>
    </Fill>
  );
}
