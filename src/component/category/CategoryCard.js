import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const CategoryCard =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Category Details</h1>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first"><b>Name</b></label>
                    <label className="form-control">Biscuit</label>
                  </div>

                  <div className="col-md-6 p-3 ">
                    <label for="first"><b>Parent Category</b></label>
                    <label className="form-control">Food</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <label for="first"><b>Trade Class</b></label>
                    <label className="form-control">Food_Class</label>
                  </div>
                </div>
            </div>
          </div></div>
          <Footer />
          </div>
          
    );
};
export default CategoryCard;