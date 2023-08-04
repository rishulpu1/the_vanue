import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = ()=> {
    const priceState = {
        prices: [100,150,200],
        position: ['Balcony','Medium','Start'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam molestie sollicitudin. Maecenas tempus pretium libero, facilisis placerat est.',
            'Nunc vel risus viverra, pellentesque lacus vel, rhoncus nisi. Nam eget purus aliquet, lacinia orci eu, tempus dui.',
            'Cras blandit quis turpis id bibendum. Nulla facilisi. Integer egestas interdum metus, vitae mattis nunc consequat molestie. Quisque egestas suscipit massa et fringilla.'
        ],
        linkto: ['#','#','#'],
        delay: [500,0,500]
    }
    const showBoxes = ()=> (
        priceState.prices.map((box, index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase"
                            link={priceState.linkto[index]}

                        />
                    </div>
                </div>
            </Zoom>
        ))
    )
    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div>
    );
}

export default Pricing;