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
import AnimatedRoute from './AnimatedRoute/AnimatedRoute';
import Onboarding from './Onboarding/Onboarding';
import SeptimaLogo from './components/SeptimaLogo';
import { bgColor } from './style';

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
        <Slide bgImage={disney} align={'center flex-start'}>
          <Heading
            style={{ marginTop: 100 }}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
          >
            Mikroanimationer og interaktioner i kortapplikationer
          </Heading>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)),
                url(${dictionary})`,
            backgroundSize: 'cover'
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
          <SeptimaLogo
            color={bgColor}
            style={{ position: 'absolute', bottom: 20, left: 10 }}
          />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)),
                url(${dictionary})`,
            backgroundSize: 'cover'
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
          <SeptimaLogo
            color={bgColor}
            style={{ position: 'absolute', bottom: 20, left: 10 }}
          />
        </Slide>
        <Slide
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)),
              url(${motivation})`,
            backgroundSize: 'cover'
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
          <SeptimaLogo
            color={bgColor}
            style={{ position: 'absolute', bottom: 20, left: 10 }}
          />
        </Slide>
        <Slide align={'center flex-start'}>
          <Heading size={5} textColor={'#45241C'} style={{ margin: 50 }}>
            Flow example: Onboarding
          </Heading>
          <Onboarding />
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide align={'center flex-start'}>
          <Heading
            size={5}
            textColor={'#45241C'}
            style={{ margin: 50 }}
          ></Heading>
          <AnimatedRoute />
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide align={'center flex-start'}>
          <Fill column>
            <Heading size={5} style={{ zIndex: 2, color: bgColor }}>
              Framhev valgt element
            </Heading>
            <AnimatedRoute vignette />
          </Fill>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide>
          <Heading
            size={5}
            textColor={'#45241C'}
            style={{ margin: 50, zIndex: 2 }}
          >
            Fotos:
          </Heading>
          <List>
            <ListItem>Thomas Kelley on Unsplash</ListItem>
            <ListItem>Edho Pratama on Unsplash</ListItem>
          </List>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
      </Deck>
    );
  }
}

const Fill = styled.div`
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
