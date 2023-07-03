import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemSelect from "./ItemSelect";
import ProductCard from "./ProductCard";
import { Data } from "./Data.js";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const handleItemClick = (id) => {
    setSelectedId(id);
  };
  return (
    <Container className="mt-4 ">
      <Navbar className="text-bold border-bottom mb-4 border-3">
        <Container>
          <Navbar.Brand href="#home">Job Task</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Submitted by : <span>Muhammad Al Amin Rifat</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col md={3}>
          <ItemSelect data={Data} onItemClick={handleItemClick} />
        </Col>
        <Col md={9}>
          <ProductCard id={selectedId} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
