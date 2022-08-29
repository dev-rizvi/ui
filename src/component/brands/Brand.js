import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const Brand =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Add New Brand</h1>
              <form>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first">Name</label>
                    <input type="text" className="form-control" placeholder="Brand Name" name="name" />
                  </div>

                  <div className="col-md-6 p-3 ">
                    <label for="first">Website</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="website" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <label for="first">Brand Logo</label>
                    <input type="file" className="form-control" placeholder="Brand Name" name="logo" />
                  </div>
                  <div className="col-md-6 p-3">
                    <label for="first">Alternate Name</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="alternate_name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                  <label for="first"><b>MarketPlace</b></label>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check1" name="marketplace[]" value="facebook" />
                      <label class="form-check-label" for="check1">FaceBook</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check2" name="marketplace[]" value="google" />
                      <label class="form-check-label" for="check2">Google</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="check3" name="marketplace[]" value="amazon" />
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
                    <label for="first">Status</label>
                    <select className="form-control" name="status">
                      <option>Active</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div></div>
          <Footer />
          </div>
          
    );
};
export default Brand;