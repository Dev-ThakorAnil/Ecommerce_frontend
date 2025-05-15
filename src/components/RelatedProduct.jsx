import React, { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../context/ShopeContext";
import Title from "../components/Title";
import ProductsItems from "./ProductsItems";

export default function RelatedProduct({ category, subCategory }) {
  const { products } = useContext(ShopeContext);
  const [related, setRelated] = useState([]);
    
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <div className="my-24">
      {/* Render products here */}
      <div className="text-center py-2 text-3xl">
        <Title text1={"Related"} text2={"Product"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductsItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          /> 
        ))}
      </div>
    </div>
  );
}
