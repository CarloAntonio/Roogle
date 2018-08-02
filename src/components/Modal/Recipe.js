import React, { Component } from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';

import DetailSection from './Details/DetailSection';
import NutrientSection from './NutrientSection/NutrientSection';
import DailySection from './Daily/DailySection';

import Aux from '../../utils/Aux';

class Recipe extends Component {
    render () {
        return (
            <Aux>
                <ModalBody>
                    <DetailSection />
                    <hr/>
                    <NutrientSection />
                    <hr/>
                    <DailySection />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Hide Nutrients</Button>
                    <Button color="primary" onClick={this.props.toggle}>Hide Daily</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Close</Button>
                </ModalFooter>
            </Aux>
        )
    }
}

export default Recipe;