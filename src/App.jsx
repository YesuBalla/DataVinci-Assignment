import React from "react";
import NavBarComponent from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";

import variant1 from "./assets/variants/variant1.png";
import variant2 from "./assets/variants/variant2.png";
import variant3 from "./assets/variants/variant3.png";
import variant4 from "./assets/variants/variant4.png";
import variant5 from "./assets/variants/variant5.png";
import variant6 from "./assets/variants/variant6.png";
import variant7 from "./assets/variants/variant7.png";

import pack1 from "./assets/bundlepack/pack1.png";
import pack2 from "./assets/bundlepack/pack2.png";
import spoon from "./assets/bundlepack/spoon.png";

import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";

function App() {
  const products = [
    {
      product: {
        name: "Manuka Honey",
        umf: ["UMF™", "24+"],
        mgo: ["MGO", "1122+"],
        tagline: "The Optimiser",
        reviews: 825,
        description:
          "For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.",
        sizeOptions: [
          { label: "125g | 4.4oz", variant: "125g", image: variant1 },
          { label: "250g | 8.8oz", variant: "250g", image: variant2 },
          { label: "125g | 4.4oz", variant: "125g", image: variant3 },
          { label: "250g | 8.8oz", variant: "250g", image: variant4 },
          { label: "125g | 4.4oz", variant: "125g", image: variant5 },
          { label: "250g | 8.8oz", variant: "250g", image: variant6 },
          { label: "250g | 8.8oz", variant: "250g", image: variant7 },
        ],
        paymentOptions: [
          { type: "One-time purchase", price: "$55.88 USD", selected: true },
          { type: "Subscribe & save 20%", price: "$44.70 USD", selected: false },
        ],
        recommenedProducts: [
          {
            name: "Beauty Bundle",
            originalPrice: 478.75,
            discountedPrice: 430.88,
            currency: "USD",
            discount: "10%",
            products: [
              { name: "UMF 20+", image: pack1, weights: ["250g", "100g"] },
              { name: "UMF 24+", image: pack2, weights: ["250g", "100g"] },
              { name: "Wooden Spoon", image: spoon, weights: [] },
            ],
          },
        ],
        sponsors: [s2, s3, s4, s5, s6, s1],
      },
    },
  ];

  return (
    <>
      <NavBarComponent />
      <div
        className="container my-scroll-container"
        style={{ paddingTop: "120px" }}
      >
        <div className="row">
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <div className="col-12 col-lg-6 mb-4">
                <ProductGallery product={product.product} />
              </div>

              <div className="col-12 col-lg-6">
                <ProductDetails product={product.product} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
