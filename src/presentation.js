// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  // Fill,
  Heading,
  ListItem,
  List,
  // Quote,
  Slide,
  // Text,
  Appear
} from 'spectacle';

// import

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import bg from './img/thomas-kelley-5YtjgRNTli4-unsplash.jpg';
import AnimatedRoute from './AnimatedRoute/AnimatedRoute';
import Onboarding from './Onboarding/Onboarding';
import Phone from './components/Phone';
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
        <Slide bgImage={bg} align={'center flex-start'}>
          <Heading
            style={{ marginTop: 100 }}
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
          >
            Animationer og interaktioner
          </Heading>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide>
          <List>
            <ListItem>Definition/Motivation</ListItem>
            <Appear>
              <ListItem>Generelle eksempler</ListItem>
            </Appear>
            <Appear>
              <ListItem>Kortapplikationer</ListItem>
            </Appear>
          </List>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide>
          Hvorfor bruge animationer og interaktioner i kortapper
          <List>
            <ListItem>Motivation</ListItem>
            <ListItem>Animationer</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide align={'center flex-start'}>
          <Heading size={5} textColor={'#45241C'} style={{ margin: 50 }}>
            Flow example: Onboarding
          </Heading>
          <Onboarding />
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
        <Slide align={'center flex-start'}>
          <Heading size={5} textColor={'#45241C'} style={{ margin: 50 }}>
            Kortanimation: Visualiser rude
          </Heading>
          <Phone>
            <AnimatedRoute />
          </Phone>
          <SeptimaLogo style={{ position: 'absolute', bottom: 20, left: 10 }} />
        </Slide>
      </Deck>
    );
  }
}
