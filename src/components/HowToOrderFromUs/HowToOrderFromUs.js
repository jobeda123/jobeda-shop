import React from 'react';
import './HowToOrderFromUs.css';
import videoForOrder from '../../images/howToOrderFromUs.mp4';




const HowToOrderFromUs = () => {
    return (
        <section className="my-5 container">
            <p className="sectionTitle">How To Order From Us?</p>
            <div className="col-md-12 col-sm-6 videoArea">
                <div>
                    <video width="600" controls >
                        <source src={videoForOrder} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default HowToOrderFromUs;