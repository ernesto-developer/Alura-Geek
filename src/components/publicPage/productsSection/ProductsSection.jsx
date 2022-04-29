import React from "react";

import { ProductsRows } from "./ProductsRows";
import { useSelector } from "react-redux";


export const ProductsSection = () => {

  const { items } = useSelector(state => state.products);
  const categories = items.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];

 
  return (
    <div className="productsPage">
      {uniqueCategories.map((category, index) => {
        
        return <ProductsRows key={index} category={category} />;
      })}
    </div>
  );
};
