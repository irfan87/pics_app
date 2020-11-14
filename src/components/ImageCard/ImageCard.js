import React, { Component } from "react";

export default class ImageCard extends Component {
	render() {
		const { urls, description } = this.props.image;
		return (
			<div>
				<img src={urls.regular} alt={description} />
			</div>
		);
	}
}
