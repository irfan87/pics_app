import React from "react";
import ImageCard from "../ImageCard/ImageCard";

import "./ImageList.css";

const ImageList = ({ images }) => {
	const image = images.map((image) => (
		<ImageCard key={image.id} image={image} />
	));

	return <div className="imageList">{image}</div>;
};

export default ImageList;
