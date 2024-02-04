import React, { useState } from "react";
import "./ProductImages.css";

const ProductImages = () => {
  const [image, setImage] = useState(0);
  const [imgActive1, setImgActive1] = useState("active");
  const [imgActive2, setImgActive2] = useState("");
  const [imgActive3, setImgActive3] = useState("");
  const [imgActive4, setImgActive4] = useState("");

  const productImages = [
    {
      id: "0",
      img: process.env.PUBLIC_URL + "image-product-1.jpg",
      thumbnail: process.env.PUBLIC_URL + "image-product-1-thumbnail.jpg",
    },
    {
      id: "1",
      img: process.env.PUBLIC_URL + "image-product-2.jpg",
      thumbnail: process.env.PUBLIC_URL + "image-product-2-thumbnail.jpg",
    },
    {
      id: "2",
      img: process.env.PUBLIC_URL + "image-product-3.jpg",
      thumbnail: process.env.PUBLIC_URL + "image-product-3-thumbnail.jpg",
    },
    {
      id: "3",
      img: process.env.PUBLIC_URL + "image-product-4.jpg",
      thumbnail: process.env.PUBLIC_URL + "image-product-4-thumbnail.jpg",
    },
  ];
  function clickThumbnail(event) {
    setImage(event.target.id);
  }
  function activeThumbnail1() {
    setImgActive1("active");
    setImgActive2("");
    setImgActive3("");
    setImgActive4("");
  }
  function activeThumbnail2() {
    setImgActive1("");
    setImgActive2("active");
    setImgActive3("");
    setImgActive4("");
  }
  function activeThumbnail3() {
    setImgActive1("");
    setImgActive2("");
    setImgActive3("active");
    setImgActive4("");
  }
  function activeThumbnail4() {
    setImgActive1("");
    setImgActive2("");
    setImgActive3("");
    setImgActive4("active");
  }
  return (
    <div className="product-image flex-content">
      <div className="large-image">
        <img src={productImages[image].img} alt="Product Img" />
      </div>
      <div className="thumbnails">
        <div className="thumbnail">
          <img
            id={productImages[0].id}
            src={productImages[0].thumbnail}
            alt={`Product_${productImages[0].id} Thumbnail`}
            onClick={clickThumbnail}
            className={imgActive1}
            key={productImages[0].id}
          />
        </div>
        <div className="thumbnail">
          <img
            id={productImages[1].id}
            src={productImages[1].thumbnail}
            alt={`Product_${productImages[1].id} Thumbnail`}
            onClick={clickThumbnail}
            className={imgActive2}
            key={productImages[1].id}
          />
        </div>
        <div className="thumbnail">
          <img
            id={productImages[2].id}
            src={productImages[2].thumbnail}
            alt={`Product_${productImages[2].id} Thumbnail`}
            onClick={clickThumbnail}
            className={imgActive3}
            key={productImages[2].id}
          />
        </div>
        <div className="thumbnail">
          <img
            id={productImages[3].id}
            src={productImages[3].thumbnail}
            alt={`Product_${productImages[3].id} Thumbnail`}
            onClick={clickThumbnail}
            className={imgActive4}
            key={productImages[3].id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
