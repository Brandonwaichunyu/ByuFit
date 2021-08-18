import React from "react";
import ProductData from "./ProductData";

const product_items = () => {
  console.log(ProductData);
  const listItems = ProductData.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="main_content">
        <h3>PRODUCTS</h3>
        {listItems}
      </div>
    </div>
  );
};
export default product_items;
