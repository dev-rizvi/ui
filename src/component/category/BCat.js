import React from "react";
import { Link } from "react-router-dom";
const BCat =(props)=>{
    console.log(props);
    const renderCategoryList=props.category.map((category)=>{
        return(
          <tr >
          <td>{category.parent_id}</td>
          <td>{category.name}</td>
          <td>{category.trade_class}</td>
          <td><Link to={"/categorycard"}  className="btn btn-link"><i className="far fa-edit"></i></Link>
          <br />
          <Link to={"/categorycard"} className="btn btn-link"><i  className="fas fa-eye"></i></Link>
          </td>
        </tr>
        );
    });
    return (
        <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Categories Listing</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option selected value="option-1">
                    All
                  </option>
                  <option value="option-2">This week</option>
                  <option value="option-3">This month</option>
                  <option value="option-4">Last 3 months</option>
                </select>
              </div>
              <div className="col-auto">
                {/* <Link to={"/category"}> */}
                  <a className="btn app-btn-secondary" href="/category">
                  Add Category
                  </a>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Parent Id</th>
          <th>Name</th>
          <th>Trade Class</th>
        </tr>
      </thead>
      <tbody>
        {renderCategoryList}
      </tbody>
    </table>
  </div>
  </div></div></div>
    );

}
export default BCat;