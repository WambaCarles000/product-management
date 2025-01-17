

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center">Product Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {product.name}</h5>
          <p className="card-text">Description: {product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
