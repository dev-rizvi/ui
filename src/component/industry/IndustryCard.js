import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const IndustryCard =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Industry Details</h1>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first"><b>Name</b></label>
                    <label className="form-control">Marvel</label>
                  </div>
            </div>
          </div></div></div>
          <Footer />
          </div>
          
    );
};
export default IndustryCard;