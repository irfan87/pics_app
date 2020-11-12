import React from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
	return (
		<div className="app ui container" style={{ marginTop: "10px" }}>
			<SearchBar />
			<ImageList />
		</div>
	);
}

export default App;
