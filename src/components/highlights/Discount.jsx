import React,{useState, useEffect} from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Discount = ()=> {
    const end = 30
    const [start, setStart] = useState(0);
    const percentage = ()=> {
        if(start < end ){
            setStart(prevState => prevState+1);
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            if(start > 0 && start < end){
                setStart(prevState => prevState+1);
            }
        },30)
    },[start])
    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) => {
                        console.log(inView);
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase Before Offer Expires</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam molestie sollicitudin. Maecenas tempus pretium libero, facilisis placerat est. Nunc vel risus viverra, pellentesque lacus vel, rhoncus nisi. Nam eget purus aliquet, lacinia orci eu, tempus dui. Cras blandit quis turpis id bibendum. Nulla facilisi. Integer egestas interdum metus, vitae mattis nunc consequat molestie. Quisque egestas suscipit massa et fringilla.</p>
                    </div>
                </Slide>
            </div>
        </div>
    );
}


export default Discount;