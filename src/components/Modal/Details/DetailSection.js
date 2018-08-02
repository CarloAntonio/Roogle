import React from 'react';

import testImg from '../../../img/profile.jpg'

const DetailSection = (props) => {
    return (
            <section className="container">
                <div className="row">
                    <div className="col-12 mt-4 mb-sm-2 d-flex flex-column">
                        <h5 className="text-stack-one text-color-secondary text-center">Choosing a quality cookware set</h5>
                    </div>

                    <div className="col-12 col-sm-6 order-sm-3 mb-4 d-flex flex-column">
                        <img src={testImg} alt="test profile" className="img-fluid mx-auto rounded" style={{ width: 80 + "%", maxWidth: 16 + "rem", height: "auto"}} />
                    </div>

                    <div className="col-12 col-sm-6 order-sm-2">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="weight-bold">Full Directions List:</h6>
                                <p style={{overflowWrap: "break-word"}}>
                                    <a href="http://www.marthastewart.com/340242/chicken-curry" target="_blank" rel="noopener noreferrer" className="primary-link">http://www.marthastewart.com/340242/chicken-curry</a>
                                </p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Original Source:</h6>
                                <p>Martha Stewart</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Social Media:</h6>
                                <p>Share this recipe!</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Cook Time:</h6>
                                <p>45 Minutes</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Cal Per Serving:</h6>
                                <p>450 Calories</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Total Servings:</h6>
                                <p>Serves 6</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Cautions:</h6>
                                <p>None</p>
                            </div>

                            <div className="col-6">
                                <h6 className="weight-bold">Diet Labels:</h6>
                                <p>None</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 order-sm-4">
                        <h6 className="weight-bold">Health Labels:</h6>
                        <p>Peanut-free, Tree-nut-free, Alcohol-free, Test-free</p>
                    </div>

                    <div className="col-12 order-sm-4">
                        <h6 className="weight-bold">Ingredients:</h6>
                        <p>1 Cinnamon stick, broken into 10inch pieces</p>
                        <p>2 whole cloves</p>
                        <p>1 tablespoon coriander seeds</p>
                        <p>1 tablespoon fennel seeds</p>
                        <p>1/2 teaspoon whole allspice</p>
                        <p>3 medium-size yellow onions, peeled and coarsely chopped (2 1/2 cups)</p>
                        <p>10 to 12 garlic cloves, peeled and thinly sliced</p>
                        <p>1 piece (4 ounces) fresh ginger, peeled and coarsely chopped</p>
                    </div>
                </div>
            </section>
    )
}

export default DetailSection;