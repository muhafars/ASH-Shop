// import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
// import axios from "axios";
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProduct = async function () {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProduct();
  // }, []);

  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <div>{isError?.data?.message || isError.error}</div>
      ) : (
        <Row>
          <h2>Latest Product</h2>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
