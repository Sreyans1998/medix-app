import React from 'react';
import logo from "./photo/Medix_icon_logo.png";
import {NavLink} from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid" style={{backgroundColor: `black`, paddingTop: `10px`}}>
          <div className="row text-center text-xs-center text-sm-left text-md-left bg-dark">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Help</li>
                <li>Source</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <ul className="list-unstyled">
                <li>medix.lncte@gmail</li>
                <li>7587934911</li>
                <li>Kalpna Nagar,LNCT Group of Colleges</li>
              </ul>
            </div>
            <div className="col-xs-12">
              <NavLink className="fa fa-facebook-square" to=""></NavLink>
              <NavLink className="fa fa-google-plus" to=""></NavLink>
              <NavLink className="fa fa-instagram" to="https://www.instagram.com/"></NavLink>
              <NavLink className="fa fa-twitter" to=""></NavLink>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{backgroundColor: `rgb(100,100,100)`}}>
          <p className="text-center"><strong>@Copyright 2020 Medix All Right</strong></p>
        </div>
	    </footer>
    </>
  )
}

export default Footer;
