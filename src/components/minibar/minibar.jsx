import React, { Component } from "react";
import "./minibar.scss";
import MiniMap from "./minimap.jsx";

export default class MiniBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: true,
		};
	}

	handleMouseEnter(e) {
		this.setState({
			hover: true,
		});
	}

	handleMouseLeave(e) {
		console.log(e);
		e.persist();
		this.setState({
			hover: false,
		});
	}

	toggleHover() {
		let hover = this.state.hover;
		this.setState({
			hover: !hover,
		});
	}

	renderMiniMap() {}

	render() {
		let { height, total_height, offset, article_json } = this.props;
		let { hover } = this.state;

		let scrollbar_height = (height / total_height) * 560;

		let scrollbar_pos_end = 560 - scrollbar_height;

		let progress = offset / (total_height - height);

		let scrollbar_pos = progress * scrollbar_pos_end;

		// let offset_height = offset_percent * 560;
		let style = {
			height: scrollbar_height + "px",
			top: scrollbar_pos + "px",
		};

		let scale = 40 / 640;

		return (
			<div
				className="minibar"
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onMouseEnter={this.handleMouseEnter.bind(this)}
			>
				<div style={style} className="scroll"></div>
				<MiniMap
					article_json={article_json}
					hover={hover}
					viewport_style={style}
				/>
			</div>
		);
	}
}
