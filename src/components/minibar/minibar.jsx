import React, { Component } from "react";
import "./minibar.scss";

export default class MiniBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: false,
		};
	}

	handleMouseEnter(e) {
		this.setState({
			hover: true,
		});
	}

	handleMouseLeave(e) {
		this.setState({
			hover: false,
		});
	}

	renderMiniMap() {}

	render() {
		let { height, total_height, offset } = this.props;

		let scrollbar_height = (height / total_height) * 560;

		let scrollbar_pos_end = 560 - scrollbar_height;

		let progress = offset / (total_height - height);

		let scrollbar_pos = progress * scrollbar_pos_end;

		// let offset_height = offset_percent * 560;
		let style = {
			height: scrollbar_height + "px",
			top: scrollbar_pos + "px",
		};

		return (
			<div
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				className="minibar"
			>
				<div style={style} className="scroll"></div>
			</div>
		);
	}
}
