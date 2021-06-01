import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMain.css';


const HeaderMain = () => {

    const [sliderPic, setSliderPic] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setSliderPic(json))
    }, [])

    const color = ['green', 'lightblue', 'skyblue', 'lightyellow', 'lightorange'];


    console.log(sliderPic);

    return (
        <section className="sliderBack container">
            <div className="justify-content-center">
                <Carousel>
                    {
                        sliderPic.map((pic) =>
                            <Carousel.Item>
                                <div className="d-flex">

                                    <div style={{paddingTop:"50px", paddingLeft:"50px"}} className="col-md-3 align-items-center">
                                        <h5>{pic.title}</h5>
                                        <p>Price: $ {pic.price}</p>
                                        <button className="shopBtn">Shop Now</button>
                                    </div>

                                    <div className="col-md-9">
                                        <img
                                            style={{paddingTop:"10px"}}
                                            src={pic.image}
                                            width="700px"
                                            height="250px"
                                            alt="First slide"
                                        />
                                    </div>

                                </div>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>
        </section>
    );


};

// render(<ControlledCarousel />);
export default HeaderMain;
