import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Image,
  Form,
} from "react-bootstrap";
import { FaStar, FaHeart } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import InfoPopup from "../components/ScaleModal";

import colorlab from "../assets/colorlab.png";
import afterpay from "../assets/afterpay.png";

export default function ProductPage({ product }) {
  const scale = [
    { key: "umf10", label: "UMF™ 10+", color: "#f0ad4e" },
    { key: "umf15", label: "UMF™ 15+", color: "#dc3545" },
    { key: "umf20", label: "UMF™ 20+", color: "deeppink" },
    { key: "umf24", label: "UMF™ 24+", color: "purple" },
    { key: "umf26", label: "UMF™ 26+", color: "#17a2b8" },
    { key: "umf28", label: "UMF™ 28+", color: "#28a745" },
    { key: "umf30", label: "UMF™ 30+", color: "#007bff" },
  ];

  return (
    <Container className="py-2">
      <Row>
        <Col md={12}>
          <h1 className="fw-lighter">{product.name}</h1>
          <h1 className="fw-lighter fs-2">
            {product.umf[0]}
            <span className="fw-medium fs-1 px-2">{product.umf[1]}</span>
          </h1>
          <h1 className="fw-lighter fs-2">
            {product.mgo[0]}
            <span className="fw-medium fs-1 px-2">{product.mgo[1]}</span>
          </h1>

          <InfoPopup />

          <div className="d-flex justify-content-between">
            <p className="mt-3">{product.tagline}</p>
            <div className="d-flex align-items-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <FaHeart key={i} color="gold" />
              ))}
              <span className="ms-2 text-muted">{product.reviews} REVIEWS</span>
            </div>
          </div>

          <p>{product.description}</p>

          {/* Sponsors */}
          <div className="d-flex flex-wrap gap-3 my-3">
            {product.sponsors.map((sponser, idx) => (
              <Image key={idx} src={sponser} className="p-2" />
            ))}
          </div>

          {/* Size options */}
          <h6 className="fw-light mt-4">Size (Select One)</h6>
          <p>{product.sizeOptions[0].label}</p>
          <div className="d-flex flex-wrap gap-3">
            {product.sizeOptions.map((option, idx) => (
              <div key={idx} className="d-flex gap-3 my-2 sponsor-logo">
                <Image src={option.image} />
              </div>
            ))}
          </div>

          {/* Payment options */}
          <h6 className="fw-light mt-4">Payment Options (Select One)</h6>
          <div className="gap-3 my-3 bg-light p-3 rounded-4">
            <div className="d-flex justify-content-between">
              {product.paymentOptions.map((payOption, idx) => (
                <Button
                  key={idx}
                  variant={payOption.selected ? "warning" : "outline-warning"}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "15px",
                    marginRight: "5px",
                  }}
                  className={
                    payOption.selected
                      ? "text-light rounded-5"
                      : "text-dark rounded-5"
                  }
                >
                  <span style={{ width: "40%", lineHeight: "14px" }}>
                    {payOption.type}
                  </span>
                  <span style={{ width: "35%", lineHeight: "14px" }}>
                    {payOption.price}
                  </span>
                </Button>
              ))}
            </div>

            <p className="py-1 mb-0">
              <GrPowerReset /> What is a Subscription
            </p>
          </div>

          {/* Quantity selection */}
          <h6 className="fw-light mt-4">Select Quantity</h6>
          <div className="d-flex flex-row justify-content-between gap-3">
            <Button
              variant="warning"
              className="text-light rounded-5 d-flex flex-row justify-content-around p-2"
              style={{ width: "35%", cursor: "default" }}
            >
              <span style={{ cursor: "pointer" }}>−</span>
              <span style={{ textAlign: "center" }}>{1}</span>
              <span style={{ cursor: "pointer" }}>+</span>
            </Button>
            <Button
              variant="dark rounded-5 p-2"
              style={{ width: "60%" }}
            >
              ADD TO CART
            </Button>
          </div>

          {/* Recommended bundle */}
          <div className="bg-light rounded-5 p-3 my-4">
            {product.recommenedProducts.map((recProduct, recIdx) => (
              <React.Fragment key={recIdx}>
                <div className="d-flex justify-content-center align-items-center">
                  <SlArrowLeft size={25} />
                  <h6 className="fs-5 text-center mx-3 mb-0">
                    {recProduct.name}
                  </h6>
                  <SlArrowRight size={25} />
                </div>
                <div className="d-flex my-3 flex-wrap justify-content-center justify-content-md-center justify-content-xl-start">
                  <div className="d-flex p-1 m-auto">
                    {recProduct.products.map((each, index) => (
                      <React.Fragment key={index}>
                        <div className="d-flex flex-column align-items-center">
                          <Image src={each.image} width={80} height={80} />
                          <p className="text-center fs-6">{each.name}</p>
                          {each.weights.length > 0 && (
                            <Form.Select className="rounded-5 px-2" size="sm">
                              {each.weights?.map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                              ))}
                            </Form.Select>
                          )}
                        </div>
                        {index !== recProduct.products.length - 1 && (
                          <div className="d-flex flex-row justify-content-start align-items-start py-4">
                            <span className="fw-bold fs-5 text-dark">+</span>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div
                    style={{ width: "auto" }}
                    className="d-flex flex-column justify-content-center align-items-center m-auto "
                  >
                    <div className="d-flex my-3">
                      <p className="mb-1 text-muted text-decoration-line-through fs-6 flex-nowrap">
                        {`$${recProduct.originalPrice} ${recProduct.currency}`}
                      </p>
                      <p className="fw-bold px-1 fs-6">
                        {`$${recProduct.discountedPrice} ${recProduct.currency}`}
                      </p>
                      <span className="text-success fs-6 px-1">
                        {`Save ${recProduct.discount}`}
                      </span>
                    </div>
                    <Button
                      variant="dark"
                      className="mt-2 rounded-5 px-4 py-2"
                      style={{ width: "auto" }}
                    >
                      ADD BUNDLE TO CART
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Rewards and delivery info */}
          <div className="my-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={colorlab}
                alt="logo"
                width={30}
                height={30}
                className="mx-2"
              />
              <div className="custom-font-size">
                <span>
                  Colourclub members earn up to{" "}
                  <span className="fw-bold text-warning bg-light rounded-5 p-2 mx-3">
                    56
                  </span>{" "}
                  reward points when buying this item.
                </span>{" "}
                <a href="#" className="text-decoration-none text-dark">
                  Sign up or log in
                </a>
              </div>
            </div>

            <div className="d-flex py-3 border-top border-bottom">
              <div>
                <p className="mb-1">DELIVERY</p>
                <small>FREE DELIVERY ON ORDERS OVER $30</small>
              </div>
              <div className="mx-5">
                <p className="mb-1">ESTIMATED DELIVERY DATE:</p>
                <small>Jun 9 - Jun 13</small>
              </div>
            </div>

            <div className="py-3 border-bottom">
              <p className="mb-1">AFTER PAY</p>
              <small>
                or 4 interest-free payments of $13.97 with{" "}
                <img
                  src={afterpay}
                  alt="Afterpay"
                  style={{ height: "20px" }}
                />
              </small>
            </div>

            {/* UMF scale */}
            <div className="py-3">
              <p className="mb-2">UMF™ SCALE</p>
              <div className="d-flex">
                <div className="flex-grow-1 d-flex gap-2">
                  {scale.map((item, idx) => (
                    <div key={idx} className="flex-fill text-center">
                      <div className="fw-bold small mb-1">{item.label}</div>
                      <div
                        style={{
                          height: "2px",
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Taste profile */}
            <div className="py-3">
              <p className="mb-2">TASTE PROFILE</p>
              <div className="d-flex justify-content-between align-items-center">
                <span>Clean & Intense</span>
                <div
                  style={{ flex: 1, margin: "0 10px", position: "relative" }}
                >
                  <div
                    style={{
                      height: "2px",
                      background:
                        "linear-gradient(to right, #d2691e, #8b008b, #006400)",
                      borderRadius: "2px",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      position: "absolute",
                      left: "50%",
                      top: "-5px",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
                <span>Bold & Intense</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
