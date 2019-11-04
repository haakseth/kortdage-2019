// Import React
import React from 'react';
import styled, { css } from 'styled-components';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text, Appear } from 'spectacle';

// import

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import disney from './img/thomas-kelley-5YtjgRNTli4-unsplash.jpg';
import dictionary from './img/waldemar-brandt-U3Ptj3jafX8-unsplash.jpg';
import motivation from './img/andrew-neel-1-29wyvvLJA-unsplash.jpg';
import shaka1 from './img/shaka1.jpg';
import shaka2 from './img/shaka2.jpg';
import StaticRoute from './examples/AnimatedRoute/StaticRoute';
import AnimatedRoute1 from './examples/AnimatedRoute/AnimatedRoute1';
import AnimatedRoute2 from './examples/AnimatedRoute/AnimatedRoute2';
import SelectFeature from './examples/SelectFeature/SelectFeature';
import Onboarding from './examples/Onboarding/Onboarding';
import SeptimaLogo from './components/SeptimaLogo';
import { bgColor } from './style';
import Vignette from './components/Vignette';
import ThankYou from './slides/ThankYou';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: bgColor,
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        progress={'bar'}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, .8)),
                url(${disney})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          align={'center flex-start'}
        >
          <h1 style={{ color: '#fff' }}>
            Mikroanimationer og interaktioner i kortapplikationer
          </h1>
          <A
            style={{
              position: 'absolute',
              fontSize: 12,
              top: 10,
              left: 10
            }}
            href="https://haakseth.github.io/kortdage-2019/"
          >
            https://haakseth.github.io/kortdage-2019/
          </A>
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.7)),
                url(${shaka1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <A
            style={{
              position: 'absolute',
              fontSize: 18,
              top: 10,
              left: 10
            }}
            href="https://haakseth.github.io/kortdage-2019/"
          >
            https://haakseth.github.io/kortdage-2019/
          </A>
          <Fill column style={{ color: bgColor, justifyContent: 'flex-end' }}>
            <span>John Wika Haakseth</span>
            {/* eslint-disable-next-line */}
            <span>🇳🇴🇩🇰</span>
            {/* eslint-disable-next-line */}
            <span>🏐💻☕️🎸🐶</span>
            <span>@haakseth</span>
            <SeptimaLogo color={bgColor} />
          </Fill>
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)),
                url(${dictionary})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Fill
            column
            style={{
              justifyContent: 'space-evenly'
            }}
          >
            <div>
              <Heading
                style={{
                  color: bgColor
                }}
                size={6}
              >
                Animationer
              </Heading>
              <Text
                style={{
                  color: bgColor
                }}
              >
                Billeder der simulerer bevægelse
              </Text>
            </div>
            <div style={{ opacity: 0 }}>
              <div>
                <Heading
                  style={{
                    color: bgColor
                  }}
                  size={6}
                >
                  Interaktioner
                </Heading>
                <Text
                  style={{
                    color: bgColor
                  }}
                >
                  To eller flere elementer der reagerer på hinanden
                </Text>
              </div>
            </div>
          </Fill>
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)),
                url(${dictionary})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Fill
            column
            style={{
              justifyContent: 'space-evenly'
            }}
          >
            <div>
              <Heading
                style={{
                  color: bgColor
                }}
                size={6}
              >
                Mikroanimationer
              </Heading>
              <Text
                style={{
                  color: bgColor
                }}
              >
                Animationer der har et enkelt fokus
              </Text>
            </div>
            <div>
              <Appear>
                <div>
                  <Heading
                    style={{
                      color: bgColor
                    }}
                    size={6}
                  >
                    Interaktioner
                  </Heading>
                  <Text
                    style={{
                      color: bgColor
                    }}
                  >
                    To eller flere elementer der reagerer på hinanden
                  </Text>
                </div>
              </Appear>
            </div>
          </Fill>
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)),
              url(${motivation})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Heading
            style={{
              color: bgColor
            }}
            size={2}
          >
            {/* Hvorfor bruge animationer og interaktioner i kortapper? */}
            Motivation
          </Heading>
          <List
            style={{
              color: bgColor
            }}
          >
            {/* Framhev hva der er vigtig lige nu, call to action */}
            <ListItem>Guide brugeren</ListItem>
            <Appear>
              {/* Det kan tage tid for et input at give resultat, animation kan give feedback på at noget sker */}
              <ListItem>Giv feedback på input</ListItem>
            </Appear>
            <Appear>
              <ListItem>De' sjovt</ListItem>
            </Appear>
          </List>
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide>
          På web: CSS, keyframes, rammeverker. react-spring, greensock
        </Slide>
        <Slide
          align={'center center'}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.7))`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Fill column>
            <Onboarding />
          </Fill>
          <Vignette />
          <SeptimaLogo />
        </Slide>
        <Slide>
          Kortbiblioteker er canvas eller web gl, så ingen css. De har ofte hver
          sine set med animationer tilgængelige.
        </Slide>
        <Slide align={'center flex-start'}>
          <MapHeader>mapbox-gl: setStyle()</MapHeader>
          <SelectFeature />
          <SeptimaLogo color={'#fff'} />
        </Slide>
        <Slide align={'center flex-start'}>
          <MapHeader>Custom kortanimation</MapHeader>
          <StaticRoute />
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide>requestAnimationFrame()</Slide>
        <Slide align={'center flex-start'}>
          <MapHeader>Custom kortanimation</MapHeader>
          <AnimatedRoute1 />
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide>
          Lines can be of varying lengths, how can we get a predictable
          animation? GIS!!!!
        </Slide>
        <Slide align={'center flex-start'}>
          <MapHeader>Custom kortanimation</MapHeader>
          <AnimatedRoute2 />
          <SeptimaLogo color={bgColor} />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.7)),
                url(${shaka2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <ThankYou />
        </Slide>
      </Deck>
    );
  }
}

export const A = styled.a`
  color: ${bgColor};
`;

export const UL = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  li {
    margin-top: 4px;
  }
`;

export const ListWrapper = styled.div`
  font-size: 12px;
  text-align: start;
`;
export const Fill = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2em;
  display: flex;
  align-items: center;
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;

const MapHeader = styled.h1`
  position: absolute;
  z-index: 4;
  color: ${bgColor};
`;
