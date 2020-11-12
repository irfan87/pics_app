import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		// get the network request
		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID 7xeNcl6t_05mtQ2kXE7CVtnOrDrU1DRllYtuQDtuhUk",
			},
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="app ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList />
			</div>
		);
	}
}

export default App;
