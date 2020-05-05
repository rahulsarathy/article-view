import React, { Component } from "react";
import axios from "axios";
import "./article.scss";

import Header from "./header.jsx";

let article_id = "4d327542bfabd80e34c3";

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			article_json: {},
		};
	}

	componentDidMount() {
		this.getArticle();
	}

	getArticle() {
		axios
			.get(
				`http://127.0.0.1:8000/articles/api/get_article/?article_id=4d327542bfabd80e34c3`,
				{
					params: {
						article_id: article_id,
					},
				}
			)
			.then((res) => {
				let data = res.data;
				// console.log(data);
				this.setState({
					article_json: data,
				});
			});
	}
	createMarkup() {
		return { __html: this.state.article_json.content };
	}

	render() {
		let { article_json } = this.state;
		let { title, author } = article_json;

		return (
			<div className="article">
				<Header />
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
			</div>
		);
	}
}
