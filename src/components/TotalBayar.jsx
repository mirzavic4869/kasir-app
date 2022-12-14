import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class TotalBayar extends Component {
	render() {
		// const totalBayar = this.props.keranjangs.reduce(function (result, item) {
		// 	return result + item.total_harga;
		// }, 0);
		return (
			<div className="fixed-bottom">
				<Row>
					<Col md={{ span: 3, offset: 9 }} className="px-4">
						<h4>
							Total harga: <strong>Rp {numberWithCommas}</strong>
						</h4>
					</Col>
				</Row>
			</div>
		);
	}
}
