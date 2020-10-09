import React from 'react';
import './App.scss';

import Accordion from 'components/Accordion/Accordion'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Accordion title="Accordion title">
          <p className="Accordion__Text">Lorem ipsum dolor sit amet</p>
        </Accordion>
        <Accordion title="Accordion title">
          <p className="Accordion__Text">Lorem ipsum dolor sit amet</p>
        </Accordion>
      </div>
    </div>
  );
}

export default App;