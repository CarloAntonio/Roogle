import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

import Recipe from './containers/Recipe/Recipe';
import Main from './containers/Main/Main';
import Aux from './utils/Aux';

import * as actions from  './store/actions/actions';

class App extends Component {

  render() {
    return (
      <Aux>
        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} style={{maxWidth: "900px", width: "80%"}}>
          <Recipe toggle={this.props.toggleModal}/>
        </Modal>
        <Main toggle={this.props.toggleModal}/>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.redUI.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
