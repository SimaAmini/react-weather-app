import React, { useState } from 'react';
import './App.scss';

import Today from './components/today';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const [location, setLocation] = useState('');

  return (
    <div className="container">
      <Header location={location} />
      <Today onLocationChange={location => setLocation(location)} />
      <Footer />
    </div>
  );
};

export default App;
