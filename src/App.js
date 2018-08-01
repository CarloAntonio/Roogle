import React, { Component } from 'react';

import MainSearch from './components/MainSearch/MainSearch';
import AdvanceSection from './components/AdvanceSection/AdvanceSection';

class App extends Component {
  render() {
    return (
      <div>
        <MainSearch />
        <hr className="mx-5"/>
        <AdvanceSection />
      </div>
    );
  }
}

export default App;
