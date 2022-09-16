import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
	return (
		<Col md={4} sm={6} className="mb-4">
			<Card className="shadow">
				<Card.Img variant="top" src={"assets/assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
				<Card.Body>
					<Card.Title>
						{menu.nama} ({menu.kode})
					</Card.Title>
					<Card.Text>Rp {numberWithCommas(menu.harga)}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Menus;
