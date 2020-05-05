import React, { Component } from "react";
import MiniBar from "../minibar/minibar.jsx";

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<div className="inner-header">
						<img
							className="logo"
							src="http://127.0.0.1:8000/static/icons/full.svg/"
							alt="Pulp"
						/>
						<p className="estimation">10 minutes left</p>
						<img
							className="info-image"
							src="http://127.0.0.1:8000/static/icons/round.svg/"
							alt="show summary"
						/>
						<hr></hr>
						<div className="minibar-wrapper">
							<div className="fixed-wrapper">
								<MiniBar />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
