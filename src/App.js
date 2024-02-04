import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";

function App() {
  //Cart Data
  const [cartData, setCartData] = useState("");

  //Product Data
  const productData = {
    companyName: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    discountedPrice: 125.0,
    basePrice: 250.0,
    discount: 50,
  };

  //Getting productData with quantity from ProductDetails
  //via callback props and function
  function saveDataHandler(savedProductData) {
    setCartData(savedProductData);
  }

  return (
    <div className="App">
      <NavBar cartData={cartData} />
      <div className="main">
        <ProductImages />
        <ProductDetails
          productData={productData}
          onSaveProductData={saveDataHandler}
        />
      </div>
    </div>
  );
}

export default App;
