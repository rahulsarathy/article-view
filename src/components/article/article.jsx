import React, { Component } from "react";
import axios from "axios";
import "./article.scss";

import Header from "./header.jsx";
import Content from "../content/content.jsx";

import useWindowDimensions from "./useWindowDimensions.js";

let article_id = "4d327542bfabd80e34c3";

class Article extends Component {
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
				this.setState(
					{
						article_json: data,
					},
					() => {}
				);
			});
	}

	render() {
		let { height, offset, total_height } = this.props;
		let { article_json } = this.state;

		return (
			<div className="article">
				<Header
					height={height}
					offset={offset}
					total_height={total_height}
					article_json={article_json}
				/>
				<Content article_json={article_json} />
			</div>
		);
	}
}

export default function ArticleWrapper() {
	let { height, width, offset, total } = useWindowDimensions();

	return (
		<Article
			width={width}
			height={height}
			offset={offset}
			total_height={total}
		/>
	);
}
