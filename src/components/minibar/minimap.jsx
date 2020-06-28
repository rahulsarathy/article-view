import React, { Component } from "react";
import "./minimap.scss";
import { CSSTransition } from "react-transition-group";
import Content from "../content/content.jsx";

export default class MiniMap extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		let { article_json, hover, viewport_style } = this.props;

		return (
			<CSSTransition
				in={hover}
				classNames="minimap-wrapper"
				unmountOnExit
				appear
				timeout={300}
			>
				{(state) => (
					<div className="minimap">
						<div className="viewport" style={viewport_style}></div>
						<div className="content-wrapper">
							<Content article_json={article_json} />
						</div>
					</div>
				)}
			</CSSTransition>
		);
	}
}
