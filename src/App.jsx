import React from "react";
import NavBarComponent from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";

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
          {
            label: "125g | 4.4oz",
            variant: "125g",
            image: "/src/assets/variants/variant1.png",
          },
          {
            label: "250g | 8.8oz",
            variant: "250g",
            image: "/src/assets/variants/variant2.png",
          },
          {
            label: "125g | 4.4oz",
            variant: "125g",
            image: "/src/assets/variants/variant3.png",
          },
          {
            label: "250g | 8.8oz",
            variant: "250g",
            image: "/src/assets/variants/variant4.png",
          }, {
            label: "125g | 4.4oz",
            variant: "125g",
            image: "/src/assets/variants/variant5.png",
          },
          {
            label: "250g | 8.8oz",
            variant: "250g",
            image: "/src/assets/variants/variant6.png",
          }, {
            label: "250g | 8.8oz",
            variant: "250g",
            image: "/src/assets/variants/variant7.png",
          }
        ],
        paymentOptions: [
          {
            type: "One-time purchase",
            price: "$55.88 USD",
            selected: true
          },
          {
            type: "Subscribe & save 20%",
            price: "$44.70 USD",
            selected: false
          }
        ],
        recommenedProducts: [
          {
            name: "Beauty Bundle",
            originalPrice: 478.75,
            discountedPrice: 430.88,
            currency: "USD",
            discount: "10%",
            products: [
              {
                name: "UMF 20+",
                image: "/src/assets/bundlepack/pack1.png",
                weights: ["250g", "100g"]
              },
              {
                name: "UMF 24+",
                image: "/src/assets/bundlepack/pack2.png",
                weights: ["250g", "100g"]
              },
              {
                name: "Wooden Spoon",
                image: "/src/assets/bundlepack/spoon.png",
                weights: []
              }
            ]
          },
        ],
        sponsors: [
          "/src/assets/s2.png",
          "/src/assets/s3.png",
          "/src/assets/s4.png",
          "/src/assets/s5.png",
          "/src/assets/s6.png",
          "/src/assets/s1.png",
        ],
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
