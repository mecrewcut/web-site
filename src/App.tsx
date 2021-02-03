import React from 'react';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

import Container from '@material-ui/core/Container';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Slider />
        <Services />
        <Location />
      </Container>
      <Footer />
    </>
  );
}

export default App;
