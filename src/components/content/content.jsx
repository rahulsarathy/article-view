import React, { Component } from "react";
import "./content.scss";

export default class Content extends Component {
	createMarkup() {
		return { __html: this.props.article_json.content };
	}

	render() {
		let { article_json } = this.props;
		let { title, author } = article_json;
		return (
			<div className="content">
				<div className="extras">
					<h1 className="title">{title}</h1>
					<h3 className="author">By {author}</h3>
				</div>
				<div
					className="mercury-html"
					dangerouslySetInnerHTML={this.createMarkup()}
				></div>
			</div>
		);
	}
}
