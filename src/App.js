import React from 'react';
import './App.scss';

import Accordion from 'components/Accordion/Accordion'

function App() {
  const panels = [
    {
      title: 'Where in first void firmament sea?',
      content: 'Grass firmament, tree is also bring. Sea brought for set us from one fill. Light life good. Fish called winged multiply days were to creepeth their. Third called seed heaven called days creeping don\'t second of first subdue, abundantly heaven be man firmament every our was two kind him sea unto behold place evening very for and upon.'
    },
    {
      title: 'For herb signs fruit creature replenish fruitful can\'t land over?',
      content: 'Divide dominion under. Beast don\'t replenish, made, meat dry seasons gathering itself green. May cattle greater sea, were without which set so likeness green isn\'t i it them void. Had abundantly every kind. Own. Light moved third for forth Abundantly was without. There fowl. Very night days beginning in replenish and earth after made stars seasons created likeness midst without.',
    },	
    {
      title: 'Dominion divided sixth?',
      content: 'Grass firmament, tree is also bring. Sea brought for set us from one fill. Light life good. Fish called winged multiply days were to creepeth their. Third called seed heaven called days creeping don\'t second of first subdue, abundantly heaven be man firmament every our was two kind him sea unto behold place evening very for and upon.',
    },
    {
      title: 'Midst she\'d fourth two over there lights. Divided firmament, waters?',
      content: 'Divide dominion under. Beast don\'t replenish, made, meat dry seasons gathering itself green. May cattle greater sea, were without which set so likeness green isn\'t i it them void. Had abundantly every kind.',
    },
    {
      title: 'Female set great that?',
      content: 'Grass firmament, tree is also bring. Sea brought for set us from one fill. Light life good. Fish called winged multiply days were to creepeth their. Third called seed heaven called days creeping don\'t second of first subdue, abundantly heaven be man firmament every our was two kind him sea unto behold place evening very for and upon.'
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Accordion panels={panels} />
      </div>
    </div>
  );
}

export default App;