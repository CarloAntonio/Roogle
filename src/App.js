import React, { Component } from 'react';
import { Modal } from 'reactstrap';

import Recipe from './containers/Recipe/Recipe';
import Main from './containers/Main/Main';

import Aux from './utils/Aux';

class App extends Component {

  state = {
    modal: true,
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
        <Main toggle={this.toggle}/>
      </Aux>
    );
  }
}

export default App;
