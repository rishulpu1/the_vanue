import React from "react";

const Location = ()=> {
    return(
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.94574969403!2d76.60763567979329!3d30.73513585908237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1691324304511!5m2!1sen!2sin" width="100%" height="500"  loading="lazy" ></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
}

export default Location;