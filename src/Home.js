// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Near_shop from "./photo/OrderOnline.png";
import Corona from "./photo/Corona.png";
import fast_delivery from "./photo/fast_delivery.png";
import LabTested from "./photo/LabTest.png"
import { Carousel } from 'react-bootstrap';
import CardProperty from './Card';
import MTdata from './MedTypeData';
// import DisplayImage from "./presUpload";
// import {Switch, Route} from "react-router-dom";

const Home = () => {

  return (
  
    <>
      <div className="Back">
        <div className="w-100 h-75" style={{backgroundColor:`#abe4f7`}}>
          <Carousel>
            <Carousel.Item className="w-100">
              <img className="d-block mx-auto w-75 resp" src={LabTested} style={{height:`70%`}} alt="Corona Cases" />
            </Carousel.Item>
            <Carousel.Item className="w-100">
              <img className="d-block mx-auto w-75 resp" src={Corona} style={{height:`70%`}} alt="Corona Cases" />
            </Carousel.Item>
            <Carousel.Item className="w-100">
              <img className="d-block mx-auto w-75 resp" src={Near_shop} style={{height:`70%`}} alt="Order from Shops near you" />
            </Carousel.Item>
            <Carousel.Item className="w-100">
              <img className="d-block mx-auto w-75 resp" src={fast_delivery} style={{height:`70%`}} alt="Super Fast Delivery" />
            </Carousel.Item>
          </Carousel>
        </div>   
        <div className="col-lg-12" style={{backgroundColor: `#abe4f7`}}>
          <div className="row">
            {
              MTdata.map((val, ind) =>{
                return <CardProperty key={ind}
                imgsrc={val.imgsrc}
                title={val.title} />
              })
            }
          </div>
        </div>   
      </div>
      <div className="w-70 mx-auto" style={{backgroundColor:`blue`,  position:`static`, height:`100%`}}>
        {/* <DisplayImage /> */}
      </div>       
    </>
  )
}

export default Home;
