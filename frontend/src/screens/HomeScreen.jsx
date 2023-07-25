import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async function () {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Row>
        <h2>Latest Product</h2>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
