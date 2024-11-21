import React from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import Countdown from './Countdown';
import RSVP from './RSVP';
import DressCode from './DressCode';
import BankDetails from './BankDetails';
import MapButton from './MapButton';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Welcome />
      <Countdown />
      <RSVP />
      <Gallery />
      <DressCode />
      <BankDetails />
      <MapButton />
    </div>
  );
}

export default Home;
