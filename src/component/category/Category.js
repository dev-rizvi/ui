import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
const Category =() => {
    return (
      <div>
        <Header/>
        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <h1 className="app-page-title">Add Categories </h1>
              <form>
                <div className="row">
                  <div className="col-md-6 p-3 ">
                    <label for="first">Parent Category</label>
                    <select className="form-control" name="status">
                      <option value="0">None</option>
                      <option>Clothe</option>
                      <option>Shoes</option>
                      <option>Food</option>
                    </select>
                  </div>
                  <div className="col-md-6 p-3 ">
                    <label for="first"> Category Name</label>
                    <input type="file" className="form-control" placeholder="Category Name" name="name" />
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <label for="first">Trade Class</label>
                    <input type="text" className="form-control" placeholder="Brand Name" name="logo" />
                  </div>
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
export default Category;