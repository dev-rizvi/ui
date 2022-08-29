import React from "react";
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import BCat from './BCat';
import Footer from '../common/Footer';
const CategoryList =()=>{
    const categories=[
        {
          id:"1",
          parent_id:"2",
          name:"Clothe",
          trade_class:""
        },
        {
            id:"2",
            parent_id:"2",
            name:"Food",
            trade_class:""
          },
          {
            id:"3",
            parent_id:"0",
            name:"Shoes",
            trade_class:""
          },
          {
            id:"4",
            parent_id:"2",
            name:"Biscuit",
            trade_class:""
          },
          {
            id:"5",
            parent_id:"1",
            name:"Belt",
            trade_class:""
          },
      ];
return(
    <>
    <Header />
    <BCat category={categories}/>
    <Footer />
    </>
    );

}
export default CategoryList;