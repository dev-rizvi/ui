import React from "react";
import { Link } from "react-router-dom";
const BInd =(props)=>{
    //console.log(props);
    const renderCategoryList=props.industry.map((industry)=>{
        return(
          <tr >
          <td>{industry.id}</td>
          <td>{industry.name}</td>
          <td><Link to={"/industrycard"}  className="btn btn-link"><i className="far fa-edit"></i></Link>
          <br />
          <Link to={"/industrycard"} className="btn btn-link"><i  className="fas fa-eye"></i></Link>
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
          <h1 className="app-page-title mb-0">Industries Listing</h1>
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
                  <a className="btn app-btn-secondary" href="/industry">
                  Add Industries
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
          <th>S.No</th>
          <th>Name</th>
          <th>Action</th>
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
export default BInd;