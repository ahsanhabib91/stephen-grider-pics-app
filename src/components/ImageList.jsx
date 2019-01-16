import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  console.log(props);
  const images = props.images.map(image => {
    /**
     * Include the key to the root element. For example:
     * <div key={img.id}>
     *   <img alt={img.description} src={img.urls.regular} />
     * </div>
     */
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
