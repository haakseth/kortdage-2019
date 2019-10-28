// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
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
import AnimatedRoute from './AnimatedRoute';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'hsl(210, 36%, 96%)',
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
        <Slide bgImage={bg}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Animationer og interaktioner
          </Heading>
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
        </Slide>
        <Slide>
          Hvorfor bruge animationer og interaktioner i kortapper
          <List>
            <ListItem>Motivation</ListItem>
            <ListItem>Animationer</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide>
          <AnimatedRoute />
        </Slide>
      </Deck>
    );
  }
}
