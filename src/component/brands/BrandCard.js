import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const BrandCard =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Brands Details</h1>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first"><b>Name</b></label>
                    <label className="form-control">Joe Smith</label>
                  </div>

                  <div className="col-md-6 p-3 ">
                    <label for="first"><b>Website</b></label>
                    <label className="form-control">www.xyz.com</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <label for="first"><b>Brand Logo</b></label>
                    <img className="form-control" style={{width: "100px"}} src="https://i.pinimg.com/originals/e6/01/46/e60146b3187908f5a06c17620d9a027e.png" />
                  </div>
                  <div className="col-md-6 p-3">
                    <label for="first"><b>Alternate Name</b></label>
                    <label className="form-control">Yail</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                  <label for="first"><b>MarketPlace</b></label>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check1" name="marketplace[]" value="facebook" checked disabled/>
                      <label class="form-check-label" for="check1">FaceBook</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check2" name="marketplace[]" value="google" checked disabled/>
                      <label class="form-check-label" for="check2">Google</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check3" name="marketplace[]" value="amazon" checked disabled/>
                      <label class="form-check-label" for="check2">Amazon</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check4" name="marketplace[]" value="ebay" />
                      <label class="form-check-label" for="check2">Ebay</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check5" name="marketplace[]" value="redbubble" />
                      <label class="form-check-label" for="check2">Redbubble</label>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <label for="first"><b>Status</b></label>
                    <select className="form-control" name="status" disabled>
                      <option selected>Active</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
            </div>
          </div></div>
          <Footer />
          </div>
          
    );
};
export default BrandCard;