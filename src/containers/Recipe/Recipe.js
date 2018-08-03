import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ModalBody, ModalFooter } from 'reactstrap';

import DetailSection from './Details/DetailSection';
import NutrientSection from './NutrientSection/NutrientSection';
import DailySection from './Daily/DailySection';
import Aux from '../../utils/Aux';

import * as actions from '../../store/actions/actions';

//mock data
import { dailyData, nutrientData } from '../../data/MockData';

class Recipe extends Component {
    render () {
        let nutrientsSection = null;
        if(this.props.showNutrientDetails) {
            nutrientsSection = (
                <Aux data-test="nutrient-section">
                    <hr/>
                    <NutrientSection nutrientData={nutrientData} />
                </Aux>
            )
        }

        let dailySection = null;
        if(this.props.showDailyDetails) {
            dailySection = (
                <Aux data-test="daily-section">
                    <hr/>
                    <DailySection dailyData={ dailyData }/>
                </Aux>
            )
        }

        return (
            <Aux>
                <ModalBody>
                    <DetailSection />
                    {nutrientsSection}
                    {dailySection}
                </ModalBody>
                <ModalFooter className="d-flex flex-column flex-sm-row justify-content-center">
                    <Button 
                        color="primary" 
                        onClick={this.props.toggleNutrientDetails}
                        className="btn mt-1 mt-sm-0"
                        style={
                            this.props.showNutrientDetails
                            ? {backgroundColor: "#AC645A", borderColor: "#AC645A"}
                            : {backgroundColor: "#00695C", borderColor: "#00695C"}
                            }>
                        {this.props.showNutrientDetails ? "Hide Nutrients" : "Show Nutrients"}
                    </Button>
                    <Button 
                        color="primary" 
                        onClick={this.props.toggleDailyDetails}
                        className="btn mt-1 mt-sm-0"
                        style={
                            this.props.showDailyDetails 
                            ? {backgroundColor: "#AC645A", borderColor: "#AC645A"}
                            : {backgroundColor: "#00695C", borderColor: "#00695C"}
                        }>
                        {this.props.showDailyDetails ? "Hide Daily" : "Show Daily"}
                    </Button>
                    <Button 
                        color="secondary" 
                        onClick={this.props.toggle}
                        className="btn mt-1 mt-sm-0">Close</Button>
                </ModalFooter>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        showNutrientDetails: state.redUI.showNutrientDetails,
        showDailyDetails: state.redUI.showDailyDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNutrientDetails: () => dispatch(actions.toggleNutrientDetails()),
        toggleDailyDetails: () => dispatch(actions.toggleDailyDetails()),
        toggleModal: () => dispatch(actions.toggleModal()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);