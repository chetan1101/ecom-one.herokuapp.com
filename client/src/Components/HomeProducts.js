import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "../Store/Actions/productActions";
import ProductCard from "./ProductCard";

function HomeProducts() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="home_product_container">
      <Row>
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Row>
    </div>
  );
}

export default HomeProducts;
