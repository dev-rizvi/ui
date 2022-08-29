import React from "react";
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Brand from './brands/Brand';
import BrandList from './brands/BrandList';
import BrandCard from './brands/BrandCard';
import Category from './category/Category';
import CategoryList from './category/CategoryList';
import CategoryCard from './category/CategoryCard';
import Industry from './industry/Industry';
import IndustryList from './industry/IndustryList';
import IndustryCard from './industry/IndustryCard';
function App() {
 return (
  <>
  <Switch>
      <Route path={"/"} component={BrandList} exact />
      <Route path={"/brand"} component={Brand} />
      <Route path={"/brandcard"} component={BrandCard} />
      <Route path={"/categorylist"} component={CategoryList}  />
      <Route path={"/category"} component={Category} />
      <Route path={"/categorycard"} component={CategoryCard} />
      <Route path={"/industrylist"} component={IndustryList}  />
      <Route path={"/industry"} component={Industry} />
      <Route path={"/industrycard"} component={IndustryCard} />
  </Switch>
  </>
 );
   
}

export default App;
