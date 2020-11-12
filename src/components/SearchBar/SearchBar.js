import React, { Component } from "react";

export default class SearchBar extends Component {
	onInputChange = (e) => {
		e.preventDefault();

		console.log(e.target.value);
	};

	render() {
		return (
			<div className="searchBar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}
