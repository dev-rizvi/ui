import React from "react";
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import BInd from './BInd';
import Footer from '../common/Footer';
const IndusrtyList =()=>{
    const industry=[
        {
          id:"1",
          name:"Comic Industry",
        },
        {
            id:"2",
            name:"Food Industry",
          },
          {
            id:"3",
            name:"Car Industry",
          },
          {
            id:"4",
            name:"Beverage Industry",
          },
          {
            id:"5",
            name:"Fashion Industry",
          },
      ];
return(
    <>
    <Header />
    <BInd industry={industry}/>
    <Footer />
    </>
    );

}
export default IndusrtyList;