import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Phone from '../components/Phone';
import Button from './Button';
import InputWithIcon from './InputWithIcon';
import PiratLogo from './PiratLogo';

export default function Onboarding() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [introPart, setIntroPart] = useState(1);
  const [introDone, setIntroDone] = useState(false);
  const firstPartAnimation = useSpring({
    marginLeft: introPart === 1 ? 0 : -375
  });

  const AnimatedButton = animated(Button);
  const buttonOneAnimation = useSpring({
    opacity: introPart === 1 ? 1 : 0,
    maxWidth: introPart === 1 ? 200 : 0,
    width: introPart === 1 ? '45%' : '0%',
    borderWidth: introPart === 1 ? 1 : 0
  });
  const buttonTwoAnimation = useSpring({
    maxWidth: introPart === 1 ? '45%' : '100%',
    width: introPart === 1 ? '45%' : '100%'
  });
  const dotStyle = {
    width: 11,
    height: 11,
    borderRadius: '100%',
    backgroundColor: '#45241C'
  };
  const firstDotAnimation = useSpring({
    opacity: introPart === 1 ? 1 : 0.5
  });
  const secondDotAnimation = useSpring({
    opacity: introPart === 2 ? 1 : 0.5
  });
  const renderForm = () => {
    if (introDone) {
      return (
        <Wrapper style={{ justifyContent: 'center' }}>
          <PiratLogo style={{ alignSelf: 'center', marginBottom: 30 }} />
          <InputWithIcon
            autofocus
            value={username}
            setValue={setUsername}
            icontype="user"
            placeholder="Piratnavn"
            maxLength={20}
            onmaxLength={() => {
              // TODO: Fortæl brugeren at der kun er landkrabber der har så lange navne?
            }}
          />
          <InputWithIcon
            value={email}
            setValue={setEmail}
            icontype="email"
            type="email"
            placeholder="Email (valgfrit)"
            maxLength={50}
          />
          <Button
            cta
            onClick={() => {
              setIntroDone(false);
            }}
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </Wrapper>
      );
    }
  };
  const renderIntro = () => {
    if (introDone) return null;
    return (
      <Wrapper>
        <h2 style={{ marginBottom: 5 }}>Septimas fantastiske</h2>
        <h1 style={{ marginTop: 10 }}>Piratagtige spil</h1>
        <animated.div
          style={{
            ...{
              width: 750,
              display: 'flex',
              alignSelf: 'flex-start'
              // marginTop: 30
            },
            ...firstPartAnimation
          }}
        >
          <span
            style={{
              width: 295
            }}
          >
            <p>
              Her er applikationens onboarding, der skal sørge for at brugerne
              får den information de trænger for at komme i gang. Ofte er der
              meget information der skal gives, så måske trænger vi flere sider.
            </p>
            <p>
              I bunden kan vi så have en knap for at springe over informationen,
              og en knap for at gå til næste side.
            </p>
          </span>
          <span
            style={{
              width: 295,
              marginLeft: 80
            }}
          >
            Når brugererne har lest færdig, kan vi give dem signup-formularen.
            Vi trænger nu kun én knap, så for at guide brugeren, kan vi
            tydeliggøre den med en animation.
          </span>
        </animated.div>
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <animated.div
            style={{ ...{ marginRight: 4 }, ...dotStyle, ...firstDotAnimation }}
          ></animated.div>
          <animated.div
            style={{ ...{ marginLeft: 4 }, ...dotStyle, ...secondDotAnimation }}
          ></animated.div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          <AnimatedButton
            style={{
              ...buttonOneAnimation
            }}
            onClick={() => setIntroDone(true)}
            disabled={introPart !== 1}
          >
            Spring over
          </AnimatedButton>
          <AnimatedButton
            style={{
              ...buttonTwoAnimation
            }}
            cta
            onClick={() => {
              if (introPart === 1) {
                setIntroPart(2);
              } else {
                setIntroDone(true);
                setIntroPart(1);
              }
            }}
          >
            <span>{introPart === 1 ? 'Næste' : 'Start'}</span>
          </AnimatedButton>
        </div>
      </Wrapper>
    );
  };
  return (
    <Phone bgColor={'#f3edcd'}>
      {renderIntro()}
      {renderForm()}
    </Phone>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-x: hidden;
  font-size: 14px;
  color: #45241c;
`;
