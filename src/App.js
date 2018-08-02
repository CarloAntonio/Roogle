import React, { Component } from 'react';
import { Modal } from 'reactstrap';

import MainSearch from './components/MainSearch/MainSearch';
import AdvanceSection from './components/AdvanceSection/AdvanceSection';
import NutrientSection from './components/NutrientSection/NutrientSection';
import RecipeSection from './components/RecipeSection/RecipeSection';
import Footer from './components/Footer/Footer';
import Recipe from './components/Recipe/Recipe';

import Aux from './utils/Aux';

class App extends Component {

  state = {
    modal: true
  };
  
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <Aux>
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{maxWidth: "900px", width: "80%"}}>
          <Recipe toggle={this.toggle}/>
        </Modal>
        <MainSearch />
        <hr className="mx-5"/>
        <AdvanceSection />
        <hr className="mx-5"/>
        <NutrientSection />
        <hr className="mx-5"/>
        <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
        <RecipeSection />
        <Footer />
      </Aux>
    );
  }
}

export default App;
