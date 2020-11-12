import React from "react";

const ImageList = ({ images }) => {
	const image = images.map(({ urls, alt_description, id }) => (
		<img
			src={urls.regular}
			alt={alt_description}
			key={id}
			className="ui image"
		/>
	));

	return <div className="imagelist">{image}</div>;
};

export default ImageList;
