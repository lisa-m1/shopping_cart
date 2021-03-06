import React, { useEffect } from "react";
import Product from "./Product";
import productService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      let data = await productService.getProducts();
      dispatch(productsReceived(data));
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
