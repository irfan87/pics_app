import React, { Component, createRef } from "react";

export default class ImageCard extends Component {
	constructor(props) {
		super(props);

		this.state = { imageSpans: 0 };

		this.imageRef = createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const imageHeight = this.imageRef.current.clientHeight;
		const imageSpans = Math.ceil(imageHeight / 10 + 1);

		this.setState({ imageSpans });
	};

	render() {
		const { urls, description } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.imageSpans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
			</div>
		);
	}
}
