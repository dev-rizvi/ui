import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const Industry =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Add Industry </h1>
              <form>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first"> Industry Name</label>
                    <input type="text" className="form-control" placeholder="Industry Name" name="name" />
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </div></div>
          <Footer />
          </div>
          
    );
};
export default Industry;