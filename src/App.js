import React, { Component } from 'react';

import MainSearch from './components/MainSearch/MainSearch';
import AdvanceSection from './components/AdvanceSection/AdvanceSection';
import NutrientSection from './components/NutrientSection/NutrientSection';

class App extends Component {
  render() {
    return (
      <div>
        <MainSearch />
        <hr className="mx-5"/>
        <AdvanceSection />
        <hr className="mx-5"/>
        <NutrientSection />
      </div>
    );
  }
}

export default App;
