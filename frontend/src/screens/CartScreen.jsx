import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice.js";
import { Button, Card, Col, Form, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import Message from "../components/Message";

const CartScreen = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = async function (product, qty) {
    dispatch(addToCart({ ...product, qty }));
  };
  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "18px" }}>Shopping Carts</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty
            <Link to="/" style={{ marginLeft: "1rem" }}>
              <Button variant="warning" className="btn-block">
                Go Shops
              </Button>
            </Link>
          </Message>
        ) : (
          <ListGroup>
            {cartItems.map(item => (
              <ListGroupItem key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.map} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>Rp. {item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      type="number"
                      value={item.qty}
                      onChange={e => addToCartHandler(item, Number(e.target.value))}
                    >
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button type="button" variant="light">
                      <FaTrashAlt />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Item</h2>
              <p>
                Price : {""}
                <span>
                  Rp. {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </span>
              </p>
            </ListGroupItem>
            <ListGroupItem>
              <Button variant="success" className="btn btn-block" disabled={cartItems.length === 0}>
                Let's Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
