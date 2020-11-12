import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		term: "",
	};

	onFormSubmit = (e) => {
		const { onSubmit } = this.props;

		e.preventDefault();

		onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="searchBar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}
