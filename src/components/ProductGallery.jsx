import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";

import productImage from "../assets/productImage.png"
import Alb1 from "../assets/gallery/alb1.png"
import Alb2 from "../assets/gallery/alb2.png"
import Alb3 from "../assets/gallery/alb3.png"
import Alb4 from "../assets/gallery/alb4.png"
import Alb5 from "../assets/gallery/alb5.png"
import Alb6 from "../assets/gallery/alb6.png"
import Alb7 from "../assets/gallery/alb7.png"


export default function ProductGallery() {
  const images = [
    productImage,
    Alb1,
    Alb2,
    Alb3,
    Alb4,
    Alb5,
    Alb6,
    Alb7,
  ];

  const [index, setIndex] = useState(0);
  const [zoomedImg, setZoomedImg] = useState(null); // ✅ track zoom image

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="text-center">
      {/* Main Carousel */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        {images.map((src, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={src}
                alt={`Product ${idx + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  cursor: "zoom-in", // ✅ show zoom cursor
                }}
                onClick={() => setZoomedImg(src)} // ✅ open zoom modal
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Thumbnail Gallery */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {images.slice(1).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Thumbnail ${idx + 1}`}
            className={`thumbnail-img img-thumbnail ${index === idx ? "border border-3 border-primary" : ""
              }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      <Modal
        show={!!zoomedImg}
        onHide={() => setZoomedImg(null)}
        centered
        size="lg"
      >
        <Modal.Body className="text-center p-0">
          <img
            src={zoomedImg}
            alt="Zoomed"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}