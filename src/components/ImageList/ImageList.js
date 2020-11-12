import React from "react";

import "./ImageList.css";

const ImageList = ({ images }) => {
	const image = images.map(({ urls, alt_description, id }) => (
		<img src={urls.regular} alt={alt_description} key={id} />
	));

	return <div className="imageList">{image}</div>;
};

export default ImageList;
