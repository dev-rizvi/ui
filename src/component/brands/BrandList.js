import React from "react";
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Body from './Body';

import Footer from '../common/Footer';
const BrandList =()=>{
    const brands=[
        {
          id:"1",
          account_id:"2",
          industry_id:"2",
          name:"Marvel",
          alternate_name:"{}",
          logo_path:"https://d33wubrfki0l68.cloudfront.net/a0b9e16750bff5540d055dd9cd6b27e7ab314048/01d88/img/logo.png",
          website:"https://react.school/ui/button",
          marketplace_json:"{Amazon,Ebay}",
          status:"InActive"
        },
        {
          id:"2",
          account_id:"3",
          industry_id:"4",
          name:"DC ",
          alternate_name:"{}",
          logo_path:"https://d33wubrfki0l68.cloudfront.net/a0b9e16750bff5540d055dd9cd6b27e7ab314048/01d88/img/logo.png",
          website:"https://react.school/ui/button",
          marketplace_json:"{Amazon,Ebay,Redbubble}",
          status:"Active"
        }
      ];
return(
    <>
    <Header />
    <Body brands={brands}/>
    <Footer />
    </>
    );

}
export default BrandList;