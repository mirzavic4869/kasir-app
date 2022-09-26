import { React, Component } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
	render() {
		const { keranjangs } = this.props;
		return (
			<Col md={3} mt={2}>
				<h4>
					<strong>Hasil</strong>
				</h4>
				<hr />

				<ListGroup variant="flush">
					{keranjangs &&
						keranjangs.map((menuKeranjang) => (
							<ListGroup.Item key={menuKeranjang.id}>
								<Row>
									<Col xs={2}>
										<h5>
											<Badge pill variant="success">
												{menuKeranjang.jumlah}
											</Badge>
										</h5>
									</Col>
									<Col>
										<h5>{menuKeranjang.product.nama}</h5>
										<p>Rp {numberWithCommas(menuKeranjang.product.harga)} </p>
									</Col>
									<Col>
										<strong className="float-end">
											<p>Rp {numberWithCommas(menuKeranjang.total_harga)} </p>
										</strong>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
				</ListGroup>
				<TotalBayar />
			</Col>
		);
	}
}
