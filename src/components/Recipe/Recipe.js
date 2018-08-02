import React, { Component } from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';

import DetailSection from './Details/DetailSection';
import NutrientSection from './NutrientSection/NutrientSection';
import DailySection from './Daily/DailySection';
import Aux from '../../utils/Aux';

import classes from './Recipe.css';

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
                <ModalFooter className="d-flex flex-column flex-sm-row justify-content-center">
                    <Button 
                        color="primary" 
                        onClick={this.props.toggle}
                        className="btn mt-1 mt-sm-0"
                        style={{backgroundColor: "#AC645A", borderColor: "#AC645A"}}>Hide Nutrients</Button>
                    <Button 
                        color="primary" 
                        onClick={this.props.toggle}
                        className="btn mt-1 mt-sm-0"
                        style={{backgroundColor: "#AC645A", borderColor: "#AC645A"}}>Hide Daily</Button>
                    <Button 
                        color="secondary" 
                        onClick={this.props.toggle}
                        className="btn mt-1 mt-sm-0">Close</Button>
                </ModalFooter>
            </Aux>
        )
    }
}

export default Recipe;