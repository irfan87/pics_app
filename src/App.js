import React, { Component } from "react";

import "./App.css";
import unsplash from "./components/Api/unsplash";
import ImageList from "./components/ImageList/ImageList";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		// get the network request
		const response = await unsplash.get("/search/photos", {
			params: { query: term },
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="app ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
