import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Pagination } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import "./home.css";
import "./filtersidebar.css";

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Hiking Boots",
      brand: "TrailGear",
      price: 129.99,
      image: "/product-1.jpg",
      category: "boots",
      size: ["6", "7", "8", "9"],
    },
    {
      id: 2,
      name: "Casual Sneakers",
      brand: "UrbanStep",
      price: 79.99,
      image: "/product-2.jpg",
      category: "sneakers",
      size: ["5", "6", "7", "8"],
    },
    {
      id: 3,
      name: "Running Sports Shoe",
      brand: "SpeedRun",
      price: 99.99,
      image: "/product-3.jpg",
      category: "sports",
      size: ["6", "7", "8", "9", "10"],
    },
    {
      id: 4,
      name: "Leather Oxford",
      brand: "ClassicStyle",
      price: 149.99,
      image: "/product-4.jpg",
      category: "formal",
      size: ["7", "8", "9", "10"],
    },
    {
      id: 5,
      name: "Waterproof Boots",
      brand: "AquaSeal",
      price: 139.99,
      image: "/product-5.jpg",
      category: "boots",
      size: ["6", "7", "8", "9"],
    },
    {
      id: 6,
      name: "Fashion Loafers",
      brand: "FashionFit",
      price: 89.99,
      image: "/product-6.jpg",
      category: "casual",
      size: ["5", "6", "7", "8"],
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Products", path: "/shop", active: true },
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (selectedPrice !== "all") {
      if (selectedPrice === "0-50" && product.price > 50) return false;
      if (selectedPrice === "50-100" && (product.price < 50 || product.price > 100))
        return false;
      if (selectedPrice === "100-150" && (product.price < 100 || product.price > 150))
        return false;
      if (selectedPrice === "150+" && product.price < 150) return false;
    }
    return true;
  });

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="filtersidebar">
      <Container fluid className="filter-container">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <Row className="mt-4">
          {/* Filter Sidebar */}
          <Col lg={3} md={4} className="mb-4 mb-lg-0">
            <div className="filter-sidebar">
              {/* Category Filter */}
              <div className="filter-group">
                <h5 className="filter-title">Categories</h5>
                <Form>
                  <Form.Check
                    type="radio"
                    name="category"
                    label="All Categories"
                    value="all"
                    checked={selectedCategory === "all"}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="category"
                    label="Boots"
                    value="boots"
                    checked={selectedCategory === "boots"}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="category"
                    label="Sneakers"
                    value="sneakers"
                    checked={selectedCategory === "sneakers"}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="category"
                    label="Sports"
                    value="sports"
                    checked={selectedCategory === "sports"}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="category"
                    label="Formal"
                    value="formal"
                    checked={selectedCategory === "formal"}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                </Form>
              </div>

              {/* Price Filter */}
              <div className="filter-group">
                <h5 className="filter-title">Price Range</h5>
                <Form>
                  <Form.Check
                    type="radio"
                    name="price"
                    label="All Prices"
                    value="all"
                    checked={selectedPrice === "all"}
                    onChange={(e) => {
                      setSelectedPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="price"
                    label="$0 - $50"
                    value="0-50"
                    checked={selectedPrice === "0-50"}
                    onChange={(e) => {
                      setSelectedPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="price"
                    label="$50 - $100"
                    value="50-100"
                    checked={selectedPrice === "50-100"}
                    onChange={(e) => {
                      setSelectedPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="price"
                    label="$100 - $150"
                    value="100-150"
                    checked={selectedPrice === "100-150"}
                    onChange={(e) => {
                      setSelectedPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                  <Form.Check
                    type="radio"
                    name="price"
                    label="$150+"
                    value="150+"
                    checked={selectedPrice === "150+"}
                    onChange={(e) => {
                      setSelectedPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="filter-check"
                  />
                </Form>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline-warning"
                className="w-100 filter-reset-btn"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedPrice("all");
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </Col>

          {/* Products Section */}
          <Col lg={9} md={8}>
            {/* Products Header */}
            <div className="products-header mb-4">
              <h3>{filteredProducts.length} Products Found</h3>
              <span className="text-muted">Page {currentPage} of {totalPages || 1}</span>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <Row className="g-4 mb-4">
                {currentProducts.map((product) => (
                  <Col lg={4} md={6} key={product.id} className="mb-3">
                    <Card className="product-card h-100">
                      <div className="product-image-wrapper">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                        <div className="product-overlay">
                          <Button variant="warning" size="sm" className="add-to-cart-btn">
                            Quick View
                          </Button>
                        </div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <small className="product-brand text-muted">{product.brand}</small>
                        <Card.Title className="product-name">{product.name}</Card.Title>
                        <div className="product-footer mt-auto">
                          <span className="product-price">${product.price}</span>
                          <Button variant="warning" size="sm" className="add-btn">
                            Add to Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-5">
                <p className="text-muted fs-5">No products found. Try adjusting your filters.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination>
                  <Pagination.First
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageClick(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}

                  <Pagination.Next
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  />
                  <Pagination.Last
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default FilterSidebar;
