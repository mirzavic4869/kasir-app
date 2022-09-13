import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Menus = ({ menu }) => {
	return (
		<Col>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Menus;
